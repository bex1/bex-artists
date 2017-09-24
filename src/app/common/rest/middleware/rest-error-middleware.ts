import * as serializeError from 'serialize-error';
import { RestError, BadRequestError, InvalidJsonError, InternalError, InvalidResourceUrlError} from '../errors';
import { Logger, LoggerFactory } from '../../logging';

export class RestErrorMiddleware {
  public static readonly LOGGER: Logger = LoggerFactory.getLogger();

  // Error handling middleware that takes an incoming error, normalizes it to some
  // subclass of HttpError and passes it along (to eventually be logged/serialized)
  static normalizeToRestError(err, req, res, next) {
    // Already wrapped in HttpError
    if (err.httpStatusCode) {
      return next(err);
    }

    // Syntax error (caused by invalid client JSON)
    if (err instanceof SyntaxError) {
      return next(new InvalidJsonError());
    }

    // External http call errors
    if (err.statusCode) {
      return next(new RestError(err.message, err.statusCode, err.message, err.name));
    }

    // Internal error
    return next(new InternalError(err));
  }

  // This should typically be the last error handling middleware that's mounted by express.
  // This will serialize the error to the user, and log it.
  static serializeRestError(err: RestError, req, res, next) {

    if (err instanceof InternalError) {
      const logFriendlyErrorMessage: string = serializeError(err.originalError);
      RestErrorMiddleware.LOGGER.error(logFriendlyErrorMessage);
    } else {
      const logFriendlyErrorMessage: string = serializeError(err);
      RestErrorMiddleware.LOGGER.warn(logFriendlyErrorMessage);
    }

    // serialize the error
    return res.status(err.httpStatusCode).json({
      error: err
    });
  }

}

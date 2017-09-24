import { Request, Response } from 'express';
import { RestResponse } from './rest-response';
import { MethodNotAllowedError, ResourceNotFoundError } from './errors';

export class RestController {
  constructor() {}

  respond(res: Response, item: any | Array<any>, statusCode: number = 200): Response {
    const response = new RestResponse(item);
    return res.status(statusCode).json(response);
  }

  respondNoContent(res: Response, statusCode: number = 204): Response {
    return res.status(statusCode).json();
  }

  validateResourceFound(item: any) {
    if (item == null) {
      throw new ResourceNotFoundError();
    }
  }

  throwMethodNotAllowedError(req, res, next) {
    throw new MethodNotAllowedError();
  }
}

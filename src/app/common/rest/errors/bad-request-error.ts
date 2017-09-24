import { RestError } from './rest-error';

export class BadRequestError extends RestError {

  constructor(
    public message: string = 'The request cannot be fulfilled due to bad syntax.'
  ) {
    super(message, 400, 'BAD_REQUEST');
    this.name = 'BadRequestError';
  }

}

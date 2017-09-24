export class RestError extends Error {

  constructor(public message: string, public httpStatusCode: number, public code: string, name = 'RestError') {
    super(message);
    this.stack = (<any> new Error()).stack;
  }
}

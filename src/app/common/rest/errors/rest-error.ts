export class RestError extends Error {
  msg: string;

  constructor(public message: string, public httpStatusCode: number, public code: string, name: string = 'RestError') {
    super(message);
    this.msg = message;
    this.name = name;
    this.stack = (<any> new Error()).stack;
  }
}

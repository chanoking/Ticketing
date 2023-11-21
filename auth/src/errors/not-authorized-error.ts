import { CustomError } from "./custom-errors";

export class NotAuthroziedError extends CustomError {
  statusCode = 401;

  constructor() {
    super("Not Authorized");
    Object.setPrototypeOf(this, NotAuthroziedError.prototype);
  }
  serializeErrors() {
    return [{ message: "Not authrozied" }];
  }
}

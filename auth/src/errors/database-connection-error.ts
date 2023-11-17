import { CustomError } from "./custom-errors";

export class DatabaseConnectionError extends Error implements CustomError {
  statusCode = 500;
  reason = "Error connecting to database";
  constructor() {
    super("Error connecting to db");

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
  serializeErrors(): { message: string; field?: string | undefined }[] {
    throw new Error("Method not implemented.");
  }

  serializeError() {
    return [{ message: this.reason }];
  }
}

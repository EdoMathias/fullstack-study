import { StatusCode } from './status-codes';

abstract class ClientError {
  public message: string;
  public status: StatusCode;

  public constructor(message: string, status: StatusCode) {
    this.message = message;
    this.status = status;
  }
}

export class ResourceNotFoundError extends ClientError {
  public constructor(id: number) {
    const message = `id ${id} not found`;
    const status = StatusCode.NotFound;
    super(message, status);
  }
}

export class RouteNotFoundError extends ClientError {
  public constructor(route: string) {
    const message = `Route ${route} not found`;
    const status = StatusCode.NotFound;
    super(message, status);
  }
}

export class ValidationError extends ClientError {
  public constructor(message: string) {
    const status = StatusCode.BadRequest;
    super(message, status);
  }
}


export class UnauthorizedError extends ClientError {
  public constructor(message: string) {
    const status = StatusCode.Unauthorized;
    super(message, status);
  }
}

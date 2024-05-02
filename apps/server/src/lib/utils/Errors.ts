export class NoRequestForUError extends Error {
  constructor(public message: string) {
    super(message, { cause: message });
  }
}

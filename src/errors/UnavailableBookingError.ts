export class UnavailableBookingError extends Error {
  constructor(date: string) {
    super(`This book is not available until ${date}`);
    this.name = 'UnavailableBookingError';
  }
}

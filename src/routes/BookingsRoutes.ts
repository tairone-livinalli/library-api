import { Router } from 'express';
import { MissingParamError, UnavailableBookingError } from '../errors';
import Booking from '../models/BookingModel';

const router = Router();

const ONE_WEEK = 7;

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);

  return result;
}

router.post('/bookings', async (req, res) => {
  const requiredFields = ['username', 'title', 'firstAuthor'];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res
        .status(400)
        .send({ message: new MissingParamError(field).message });
    }
  }

  const { username, title, firstAuthor } = req.body;

  const bookings = await Booking.find({ title, firstAuthor }).sort({
    endDate: 'descending',
  });

  if (bookings.length > 3) {
    const formattedDate = addDays(
      new Date(bookings[0].endDate),
      1,
    ).toLocaleDateString('en-GB');

    return res.status(422).send({
      message: new UnavailableBookingError(formattedDate).message,
    });
  }

  const startDate = addDays(new Date(bookings[0]?.endDate), 1);

  const booking = await Booking.create({
    username,
    title,
    firstAuthor,
    startDate,
    endDate: addDays(startDate, ONE_WEEK),
  });

  res.status(201).send(booking);
});

export default router;

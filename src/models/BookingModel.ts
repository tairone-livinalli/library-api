import { model, Schema } from 'mongoose';

const Booking = model(
  'Booking',
  new Schema(
    {
      username: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      firstAuthor: {
        type: String,
        required: true,
      },
      startDate: {
        type: Number,
        required: true,
      },
      endDate: {
        type: Number,
        required: true,
      },
    },
    { timestamps: true },
  ),
);

export default Booking;

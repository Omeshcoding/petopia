import { Schema, model, models } from 'mongoose';

const BookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  service: {
    type: String,
    required: [true, 'Service type is required'],
  },
  frequency: {
    type: String,
    required: [true, 'frequecy is required'],
  },
  startDate: {
    type: String,
    required: [true, 'startDate is required'],
  },
  days: {
    type: Array,
    required: [true, 'days are required'],
  },
  times: {
    type: Array,
    required: [true, 'times is required'],
  },
  note: {
    type: String,
  },
  nameOnCard: {
    type: String,
    cardNumber: String,
    expDate: String,
    cvc: String,
  },
});

const BookingForms =
  models.BookingForms || model('BookingForms', BookingSchema);
export default BookingForms;

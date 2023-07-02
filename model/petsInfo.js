import { Schema, model, models } from 'mongoose';

const PetsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  firstName: {
    type: String,
    required: [true, 'firstName is required.'],
  },
  lastName: {
    type: String,
    required: [true, 'lastName is required.'],
  },
  phone: {
    type: Number,
    required: [true, 'phone is required.'],
  },
  phoneAlt: {
    type: Number,
  },
  petName: {
    type: String,
    required: [true, 'petName is required.'],
  },
  breed: {
    type: String,
    required: [true, 'breed is required.'],
  },
  birthday: {
    type: String,
  },
  gender: {
    type: String,
    required: [true, 'gender is required '],
  },
  spayed: {
    type: String,
  },
  weight: {
    type: Number,
  },
});

const PetInfo = models.PetInfo || model('PetInfo', PetsSchema);

export default PetInfo;

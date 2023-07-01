import { connectToDB } from '@utils/database';
import PetInfo from 'model/petsInfo';

export const POST = async (req) => {
  const {
    userId,
    firstName,
    lastName,
    phone,
    phoneAlt,
    city,
    petName,
    breed,
    birthday,
    gender,
    spayed,
    weight,
  } = await req.json();
  console.log(userId);
  try {
    await connectToDB();
    const newPetInfo = new PetInfo({
      user: userId,
      firstName,
      lastName,
      phone,
      phoneAlt,
      city,
      petName,
      breed,
      birthday,
      gender,
      spayed,
      weight,
    });

    await newPetInfo.save();
    console.log(new Response(JSON.stringify(newPetInfo)));
    return new Response(JSON.stringify(newPetInfo), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response('Failed to submit the form', { status: 500 });
  }
};

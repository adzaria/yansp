import {mongoose} from "@typegoose/typegoose";

export default async() => {
  console.log('---- Fin des tests');
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
}
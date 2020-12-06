import {mongoose} from "@typegoose/typegoose";

export default async() => {
  await mongoose.connection.db.dropDatabase();
}
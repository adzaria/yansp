import {mongoose} from "@typegoose/typegoose";

export default async() => {
  // @ts-ignore
  this.enableTimeouts(false);
  
  await mongoose.connection.db.dropDatabase();
}
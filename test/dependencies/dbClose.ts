import {mongoose} from "@typegoose/typegoose";
import log from "../../api/helpers/log";

export default async() => {
  // @ts-ignore
  this.enableTimeouts(false);
  
  log('---- Fin des test');
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
}
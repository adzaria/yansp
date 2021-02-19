import {mongoose} from "@typegoose/typegoose";
import log from "../../api/helpers/log";

if(process.env.NODE_ENV !== 'production') {
  if(!require('dotenv').config()) {
    throw new Error('You must add a .env file');
  }
}

export default async() => {
  try {
    // @ts-ignore
    this.enableTimeouts(false);
    
    await mongoose.connect(process.env.DATABASE_TESTS_URL!, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    await mongoose.connection.db.dropDatabase();
    log('Début des test (BDD connectée)\n');
  } catch (error) {
    throw new Error('Pas de bdd, lance sudo service mongod start');
  }
}
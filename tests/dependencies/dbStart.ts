import {mongoose} from "@typegoose/typegoose";

if(process.env.NODE_ENV !== 'production') {
  if(!require('dotenv').config()) {
    throw new Error('You must add a .env file');
  }
}

export default async() => {
  try {
    await mongoose.connect(process.env.DATABASE_TESTS_URL!, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    await mongoose.connection.db.dropDatabase();
    console.log('Début des tests (BDD connectée)\n');
  } catch (error) {
    throw new Error('Pas de bdd, lance sudo service mongod start');
  }
}
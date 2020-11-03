import {mongoose} from "@typegoose/typegoose";

if(process.env.NODE_ENV !== 'production') {
  if(!require('dotenv').config()) {
    throw new Error('You must add a .env file');
  }
}

export {testStartDb};

async function testStartDb() {
  try {

    await mongoose.connect(process.env.DATABASE_TESTS_URL!, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    await mongoose.connection.db.dropDatabase();

    console.log('Database connected\n');

  } catch (error) {

    throw new Error('Error connecting to database');
  }
}
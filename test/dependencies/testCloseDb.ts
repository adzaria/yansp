import {mongoose} from "@typegoose/typegoose";

export {testCloseDb};

async function testCloseDb() {

  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();

  console.log('Tests ended, database connection closed');
}
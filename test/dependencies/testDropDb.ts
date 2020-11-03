import {mongoose} from "@typegoose/typegoose";

export {testDropDb};

async function testDropDb() {

  await mongoose.connection.db.dropDatabase();
}
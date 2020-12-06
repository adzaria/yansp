import mongoose from 'mongoose';

mongoose.Promise = Promise;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connection.on('connected', () => {
  console.log(('---- Database connection has successed'));
});

mongoose.connection.on('reconnected', () => {
  console.log('---- Database connection restablished');
});

mongoose.connection.on('disconnected', () => {
  console.log('---- Database connection disconnected');
});

mongoose.connection.on('close', () => {
  console.log('---- Database connection closed');
});

mongoose.connection.on('error', (error) => {
  console.log('---- Database connection error');
  console.log(error);
});

const database = async (url: string): Promise<boolean> => {
  try {
    if (!url) throw new Error('No URL for database was provided');
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    return true
  } catch (error) {
    console.log('---- Database error');
    console.log(error.message);
    console.log(error);
    return false;
  }
};

export default database;

import mongoose from 'mongoose';
import log from "./log";

mongoose.Promise = Promise;

mongoose.connection.on('connected', () => {
  log(('---- Database connection has successed'));
});

mongoose.connection.on('reconnected', () => {
  log('---- Database connection restablished');
});

mongoose.connection.on('disconnected', () => {
  log('---- Database connection disconnected');
});

mongoose.connection.on('close', () => {
  log('---- Database connection closed');
});

mongoose.connection.on('error', (error) => {
  log('---- Database connection error');
  log(error);
});

const database = async (url: string): Promise<boolean> => {
  try {
    if (!url) throw new Error('No URL for database was provided');
    
    const connectionParams: any = {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
  
    /**
     * Use this to use a pem file
     */
    // if (process.env.MODE === 'production')
    //   connectionParams['sslCA'] = [fs.readFileSync(`${__dirname}/../certificates/rds-combined-ca-bundle.pem`)];
  
    await mongoose.connect(url, { ...connectionParams });
    return true
  } catch (error) {
    log('---- Database error');
    log(error.message);
    log(error);
    return false;
  }
};

export default database;

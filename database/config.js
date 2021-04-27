const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('connected to DB');
  } catch (error) {
    console.error(error);
    throw new Error('error when connecting to DB');
  }
};

module.exports = {
  dbConnection,
};
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:127.0.0.1:27017/wdc_teste', {useNewUrlParser: true, useCreateIndex: true});
mongoose.Promise = global.Promise
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error!'));

export default mongoose;
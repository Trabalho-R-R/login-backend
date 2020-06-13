import mongoose from "mongoose";
import MongoClient from "mongoose";

MongoClient.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useCreateIndex: true});
mongoose.Promise = global.Promise
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error!'));

export default mongoose;
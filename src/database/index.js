import mongoose, { connect, Promise } from 'require';


connect('mongodb://localhost/noderest', { useMongoClient: true});
Promise = global.Promise;

export default mongoose;

const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  mongoClient.connect(
    'mongodb+srv://name:password@cluster0.akbg0.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0'   
  )
.then(client => {
   console.log('Connected!');
   _db = client.db();
   callback();
})
.catch(err => {
    console.log(err);
    throw err;
});

};

const getDb = () => {
   if(_db){
     return _db;
   }
  throw 'No Database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb; 
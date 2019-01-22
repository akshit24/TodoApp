const MongoClient = require ('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    console.log('Unable to connect');
  }
  else{
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');
    db.collection('Todos').find({completed: true}).toArray().then((docs)=>{
      console.log('Todos');
      console.log(docs);
    },(err)=>{
      console.log(err);
    });
  }
});

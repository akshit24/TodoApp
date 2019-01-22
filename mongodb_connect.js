const MongoClient = require ('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    console.log('Unable to connect');
  }
  else{
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');
    /*db.collection('Todos').insertOne({
      text: 'Need to apply',
      completed:false
    },(err,result)=>{
      if(err){
        console.log('Unable to insert todo',err);
      }
      else{
        console.log(result.ops);
      }

    })*/
    db.collection('Users').insertOne({
      name: 'Akshit',
      age: '27',
      location: 'Delhi'
    },(err,result)=>{
      if(err){
        console.log('Unable to insert');
      }
      else{
        console.log(result.ops);
      }
    });
  }
  client.close();
});

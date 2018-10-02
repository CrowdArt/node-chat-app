const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ChatApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server!');
    } 
    console.log('Connected to MongoDB server');
    
    // fetching docs, converting into an array and printing onto the screen
    /** 
    db.collection('Chat').find({
        _id: new ObjectID('')
    }).toArray().then((docs) => {
        console.log('Chat');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    */

   db.collection('Chat').find().count().then((count) => {
        console.log(`Chat count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    
    //client.close();
});
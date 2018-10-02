const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ChatApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server!');
    } 
    console.log('Connected to MongoDB server');

    
    

    // client.close;
});
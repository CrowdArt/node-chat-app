const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ChatApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server!');
    } 
    console.log('Connected to MongoDB server');
    const db = client.db('ChatApp');

    db.collection('Chat').insertOne({
        text: 'Testing',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert Chat', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});
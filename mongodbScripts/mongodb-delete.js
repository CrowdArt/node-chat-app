const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ChatApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server!');
    } 
    console.log('Connected to MongoDB server');
    /** 
    // deleteMany
    db.collection('Chat').deleteMany({text: 'Eat Lunch'}).then((result) => {
        console.log(result);
    });
    // deleteOne
    db.collection('Chat').deleteOne({text: 'Eat Lunch'}).then((result) => {
        console.log(result);
    });
    */
    // findOneAndDelete
    db.collection('Chat').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);

    // client.close;
});
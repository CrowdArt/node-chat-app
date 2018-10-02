//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID;
console.log(obj);

// ES6 feature: object destructuring, 
// let's you pull out properties from an object and creating variables
// var user = {name: 'andrew', age: 25};
// var {name} = user; // name is pulled out from the user object
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/ChatApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server!');
    } 
    console.log('Connected to MongoDB server');
    
    /** 
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
    */
    // Insert new doc into Users (name, age, location)
    db.collection('Users').insertOne({
        name: 'Vuk',
        age: 25,
        location: 'San Francisco' 
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }

        console.log(result.ops[0]._id.getTimestamp());
    });

    client.close();
});
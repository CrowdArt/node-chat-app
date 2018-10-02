## Steps to setup the app:
* https://mongoosejs.com/
* https://arxiv.org/abs/1809.10049
* [Node.js v10.11.0 Documentation](https://nodejs.org/api/)
* npm i express@4.14.0 --save //express sets up an HTTP server
* nodemon server/server.js
* heroku create
* git push heroku master
* https://warm-woodland-78091.herokuapp.com/ | https://git.heroku.com/warm-woodland-78091.git
* heroku open
* npm i socket.io@1.4.8 --save //instant 2-way communication
* callback is = (req, res)
* localhost:3000/socket.io/socket.io.js
* npm install expect@1.20.2 mocha@3.0.2 --save-dave
* npm install nodemon --save-dev
* npm test
* Websocket
* `jQuery('#messages').append(li);` - statement adds the block to the DOM, system for rendering functions

## Setup MongoDB
* cd mongo/bin
* ./mongod --dbpath ~/mongo-data
* in another tab:
    * ./mongo
    * > db.Todos.insert({text: 'Vuk'})
    * db.Todos.find()

* [Mongo DB Native NodeJS Driver](https://github.com/mongodb/node-mongodb-native)

## JWT (JSON Web Token)
### Authorization
* Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. 
* JSON Web Tokens consist of three parts separated by dots:
    * Header
    * Payload
    * Signature
#### Header
The header typically consists of two parts: the type of the token, which is JWT, and the hashing algorithm being used, such as HMAC SHA256 or RSA.
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```
#### Payload
The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.
* Registered claims: These are a set of predefined claims which are not mandatory but recommended, to provide a set of useful, interoperable claims. Some of them are: iss (issuer), exp (expiration time), sub (subject), aud (audience), and others.
* Public claims: These can be defined at will by those using JWTs. But to avoid collisions they should be defined in the IANA JSON Web Token Registry or be defined as a URI that contains a collision resistant namespace.
* Private claims: These are the custom claims created to share information between parties that agree on using them and are neither registered or public claims.
```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```
The payload is then Base64Url encoded to form the second part of the JSON Web Token.
#### Signature
To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.
For example if you want to use the HMAC SHA256 algorithm, the signature will be created in the following way:
```json
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```
The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.

* calling a method on id => _id.getTimestamp()
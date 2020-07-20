import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import session from 'express-session'
const routes = require('./routes/api');
import path from 'path';

const app = express()


const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.get('/', function (req, res) {
  res.send('hello world') 
})   

app.listen( PORT , () => console.log('Example app listening on port 5000!'))

//connect to the database
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    console.log(`Database connected successfully`)
  })
  .catch(err => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());



app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
  maxAge: 5 * 60 * 60 * 1000, // 8 hours
}))

app.use('/api', routes);

app.use(express.static("client/build"));
  
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
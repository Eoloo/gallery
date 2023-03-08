const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');

// connecting the database
let mongodb_url = 'mongodb://eoloo:Nairobi254@ac-v7zqbdy-shard-00-00.ha1qbwy.mongodb.net:27017,ac-v7zqbdy-shard-00-01.ha1qbwy.mongodb.net:27017,ac-v7zqbdy-shard-00-02.ha1qbwy.mongodb.net:27017/?ssl=true&replicaSet=atlas-wduxz7-shard-0&authSource=admin&retryWrites=true&w=majority';
let dbName = 'darkroom';
mongoose.connect(`${mongodb_url}${dbName}`,{ useNewUrlParser: true , useUnifiedTopology: true }, (err)=>{
    if (err) console.log(err)
});

// test if the database has connected successfully
let db = mongoose.connection;
db.once('open', ()=>{
    console.log('Database connected successfully')
})

// Initializing the app
const app = express();


// View Engine
app.set('view engine', 'ejs');

// Set up the public folder;
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json())


app.use('/', index);
app.use('/image', image);



 
const PORT = process.env.PORT || 3000;
app.listen(PORT,() =>{
    console.log(`Server is listening at http://localhost:${PORT}`)
});

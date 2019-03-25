const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const items = require ('./routes/API/items');
const path = require ('path');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config

const db= require('./config/keys').mongoURI;

//Connect to mongoDB

mongoose.connect(db, { useNewUrlParser: true })
.then(()=>console.log("We're good!"))
.catch(err=>console.log(err));
// Use Routes

app.use('/api/items', items);

//Serve static assets if in production

if (process.env.NODE_ENV === "production") {
    //set static folder
    app.use(express.static("client/build"));
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`server started on port ${port}`));
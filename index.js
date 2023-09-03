const express=require('express');
const app=express();
const path=require('path');
const cors=require('cors')
app.use(cors());
app.use(express.json())
// app.use(cors({origin: true, credentials: true}));
const mongoose=require('mongoose');
const data = require('./config/default.json');
const mongoURI = data.mongoURI;
const database=()=>{
    const connectionParms={
        // useUnifiedToplogy:true,
        useNewUrlParser:true,
    }
    try{
        mongoose.connect(mongoURI,connectionParms);
console.log("data base connected using new age coder video in appjs file.....");
    }
    catch(err){
        console.log(err.message);
        process.exit(0)
    }
}
database();
//middle ware ,body parser,for allowing access to req object
app.use(express.json({extended:false}));
app.use('/send-email',require("./routes/folder1/send-mail"))
app.use('/alumini',require("./routes/folder1/alumini"))
app.use('',require('./routes/folder1/default'))

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
const PORT = 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
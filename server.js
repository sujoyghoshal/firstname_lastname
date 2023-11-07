const express=require('express');
const app=express();
const port=process.env.port||3000;
app.use(express.static('.'));
app.use(express.urlencoded({extended:true}));
const mongoose=require('mongoose');
const url="mongodb+srv://sujoyghoshals:sujay2003s@cluster0.rshhsky.mongodb.net/Nameall?retryWrites=true&w=majority";
mongoose.connect(url,({
    useNewUrlParser:true,
    useUnifiedTopology:true
})).then((result)=>{
  console.log('Mongoose is connected');
}).catch((err)=>{
    console.log(err);
});
app.get('/all',(req,res)=>{
    allcollection.find({}).then((result)=>{
        res.send(result);
    });
});
let allcollection=require('./models/userSchema');
app.post('/insert',(req,res)=>{
  const fromdata={
    fname:"",
    lname:""
  };
  const newdata=allcollection(fromdata);
  newdata.name=req.body.name;
  newdata.save().then((result)=>{
    //res.send(result);
    res.redirect('/all');
  });
});
app.listen(port,()=>{
    console.log(`Running the port no ${port}`);
});
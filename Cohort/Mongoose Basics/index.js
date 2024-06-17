const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())
//mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin67:AEHz0xWOBjGuYcW9@cluster0.psuifkg.mongodb.net/test?retryWrites=true&w=majority');

const User = mongoose.model('test', { name: String, email: String, password: String });



app.get('/home', (req,res)=>{
    res.send('welcome to home page');
})


app.post('/signup',(req,res)=>{
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  
  const existingUser = User.findOne({email:email});
  if(existingUser){
    res.send('User already exists');
  }

  const user = new User({name:username,email:email,password:password});
  user.save(user);
  res.send('User created successfully');
          
})

app.listen(port, console.log("sample test running"));
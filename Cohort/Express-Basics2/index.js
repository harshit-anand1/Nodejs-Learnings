const express= require('express')
const app = express();
const zod = require('zod');

app.use()

app.get('/health-status',(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const id = req.query.id;

    if(username!='harshit' || password!='pass123'){
        res.status(403).json({'msg':'Some error in accepting cred'})
        return
    }
    if(id!=1 && id!=2){
        res.status(403).json({'msg':'Some error in accepting query'})
        return
    }

    //regular logic
    res.json({'msg':'kidney is fine'});
})



app.listen(3002)
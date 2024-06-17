// const express = require('express');
// const app = express();

// app.get("/",(req,res)=>{
//     res.send("hi there");
// })

// app.listen(3000);
var users = [
    {
        namePat:"John",
       kidneys :[{
            isHealthy:false
        },
        {
            isHealthy:true
        },
        {
            isHealthy:true
        }]
    }
]


const express= require('express');
const app = express();
app.use(express.json( ));

//check kidneys and their health
app.get('/', (req,res)=>{
 
    kidneyNumberDisplay(res);
   
    
})

//add a kidney
app.post('/', (req,res)=>{
    const health = req.body.health;
    users[0].kidneys.push({
        isHealthy:health
    })
    kidneyNumberDisplay(res);
})

app.put('/', (req,res)=>{
    const jk = users[0].kidneys;
    const numberofKidneys  = jk.length;
    let numHealthy = 0;
    for(let i=0;i<jk.length;i++){
        if(!jk[i].isHealthy){
           jk[i].isHealthy = true;
        }

    }
    kidneyNumberDisplay(res);
})

app.delete('/', (req,res)=>{
    const jk = users[0].kidneys;
   // const numberofKidneys  = kidneys.length;
    const arrHealthy = [];
    for(let i=0;i<jk.length;i++){
        if(jk[i].isHealthy)
        arrHealthy.push({
            isHealthy:true
        });
    }
    users[0].kidneys=arrHealthy;
   kidneyNumberDisplay(res);
})



function kidneyNumberDisplay(res){
    const jk = users[0].kidneys;
    const numberofKidneys  = jk.length;
    let numHealthy = 0;
    for(let i=0;i<jk.length;i++){
        if(jk[i].isHealthy){
            numHealthy++;
        }

    }
    const numUnHealthy = numberofKidneys-numHealthy;
    res.json(
        {numberofKidneys, numHealthy,numUnHealthy});
}

app.listen(3000,(req,res)=>console.log("it is running"));
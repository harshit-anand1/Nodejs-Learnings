const express = require('express')
const app = express();
const port = 3002

app.get('/', (req, res) => { 
   
    const n = req.query.n;
    const ans = n*1000;
    res.send(ans.toString());
})
app.listen(port)
console.log(`The app is listening on ${port}`)



require('dotenv').config()
const express = require('express')
const app = express()

// you can use any port because there are around 65000 free ports
const port = 3000


// you have to restart , each time when a code is updated


// this is to provide the response when the request is sent
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res)=>{
    res.send('<h1> I am giving the response for the request ')
})


// this is listen the "request or response at particular port" ,
// if successful then give the message .
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
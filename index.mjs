import  express from 'express'
import os from 'os'


const app = express()
const PORT= 3000

app.get("/",(req,res)=>{
    const message= `Hi, Salah! This is pod ${os.hostname()}`
    res.send(message)
})

app.listen(PORT,()=> {
    console.log(`Server is listening at port 3000`)
    console.log(os.hostname())
})

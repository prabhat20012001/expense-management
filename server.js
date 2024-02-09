const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const colors=require('colors')

// CONFIG DOTENV FILE
dotenv.config()

const app=express()


// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())



// ROUTES
app.get('/',(req,res)=>{
res.send('<h1>Hello from server ...</h1>')
})


// Listen server
const PORT=8080 || process.env.PORT

app.listen(PORT,()=>{
   console.log(`server is running on ${PORT}`) 
}

)
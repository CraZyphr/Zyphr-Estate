import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config()
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!')
  })
  .catch((err) => {
    console.log(err)
  })
const app = express()
app.use(express.json())
app.listen(3000, () => {
  console.log('Server is running on port 3000!')
});

app.use('/API/user', userRouter)
app.use('/API/auth', authRouter)

// middleware for error, say for existing user with same usernames or gmail used in auth.controller.js
app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500;
  const message=err.message || 'Internal Server Error Occured'
  return res.send(statusCode).json({
    success:false,
    statusCode,
    message,
  })
})

import express from "express";
import mongoose from "mongoose";
import bodyParser from 'express'
import userRouter from './routes/user.js'
const app = express(); 

app.use(bodyParser.json())


app.use('/api',userRouter)
mongoose
  .connect(
    "mongodb+srv://harshitaagrawal026:4dptD5RlhSAgHEmG@cluster0.89ezoor.mongodb.net/",
    {
      dbName: "mern",
    }
  )
  .then(() => console.log("MongoDB is Connected..!"))
  .catch((err) => console.log(err.message));
const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
//username:harshitaagrawal026;
//password:4dptD5RlhSAgHEmG;
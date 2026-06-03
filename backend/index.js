import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoute.js"


dotenv.config({
  path: "./.env"
}); 

databaseConnection();

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser());


app.use("/api/v1/user",userRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
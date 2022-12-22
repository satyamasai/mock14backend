require("dotenv").config();
const express = require("express");
const { connection } = require(".//Config/db");
const app = express();
const cors = require("cors");
const { quesModel } = require("./Models/questions.model");

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Welcome to the masai quiz app...");
});


app.get("/questions",async(req,res)=>{
    
    const questions= await quesModel.find()
    console.log(questions)
res.send({"questions":questions})


})




  







app.listen(process.env.PORT, async() => {
  try {
    await connection;
    console.log("Database Connected");
    console.log("Listening on PORT: " + process.env.PORT);
  } catch (err) {
    console.log("Databse Connection failed...");
    console.log(err);
  }
});

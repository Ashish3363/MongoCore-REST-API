//To connect to MongoBD 3 major steps
//Schema-define the structure
//Schema Model
//Using Model we do CRUD Operations

//RESTFUL API
const express = require("express")
// const users = require("./MOCK_DATA.json")
const { type } = require("os")
const PORT = 3000
const app = express()
const{connectMongoDb}=require("./connections")
const userRouter=require("./routes/user")
const{logReqRes}=require("./middleware")



//Connection
connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-1').then(()=> console.log("MongoDB Connected"))
//Middleware
app.use(express.urlencoded({ extended: false }))
app.use(logReqRes("log.txt"))
//Route
app.use("/api/users",userRouter);
app.listen(PORT, () => {
    console.log("Server Started")
})

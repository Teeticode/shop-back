const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoutes = require("./routes/users");
const authRoutes = require('./routes/auth');
mongoose.connect("process.env.MONGO_URI", {useNewUrlParser: true,useUnifiedTopology:true},()=>{
    console.log("Connected");
})
dotenv.config();
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use('/api/users/', userRoutes);
app.use('/api/auth/', authRoutes);

app.listen(8000, ()=>{
    console.log("Backend server is running");
});
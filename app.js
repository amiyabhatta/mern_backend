const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = 8001;
const authRoutes = require("./routes/auth");



app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api",authRoutes);

mongoose.connect('mongodb://localhost:27017/tshirt', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}
).then(()=>{
    console.log("DB Connected");
});



app.listen(port,() => {
    console.log(`app is running at ${port}`);
})


const app = require('./app');
const connectToDb = require('./config/db');
const cloudinary = require("cloudinary");

//function to connect to database
connectToDb();

// Configuration for cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.SECRET_KEY,
});


//listening to the server
app.listen(process.env.PORT, () => {
    console.log(`server is running at port: ${process.env.PORT}`);
});
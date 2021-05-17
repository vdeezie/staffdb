//require express module
const express = require ('express');
const app = express();
const port = process.env.PORT || 5000;
const dbSetup = require ('./database/setup');
const staffRoutes = require ('./routes/staffRoutes'); 


//configure app to fetch data from request body
app.use(express.json()); 

//SETUP Mongoose 
dbSetup();


app.use(staffRoutes)


//ask app to listen to designated port
app.listen(port, () => console.log (`app listening on port ${port}`));
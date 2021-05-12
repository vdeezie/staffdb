//require express module
const express = require ('express');
const app = express();
const port = 5000; 

//set up mongoose
const mongoose = require ('mongoose');
const connectionString = 'mongodb://localhost:27017/staff';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('database connected')
    }
})

//configure app to fetch data from request body
app.use(express.json())


//Schema 
const staffSchema = new mongoose.Schema ({
    name: String,
    position: String,
    email: String,
    country: String
});
const Staff = mongoose.model('Staff', staffSchema)

//to get the list of available staff on the database
app.post('/staff', function (req, res) {
    const staff = req.body.staff;
    Staff.create({
        name: staff.name,
        position: staff.position,
        email: staff.email,
        country: staff.country
    }, (err, newStaff) => {
        if (err) {
            return res.status(500).json({message: err})
        } else {
            return res.status(200).json({message: "new staff created", newStaff})
        }
    })
})

// //Add a new staff to the database

//update a staff in the database


//Delete a staff from the database
// app.delete




//ask app to listen to designated port
app.listen(port, () => console.log (`app listening on port ${port}`));
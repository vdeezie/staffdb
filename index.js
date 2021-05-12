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

//creates a new staff 
app.post('/staff', (req, res) => {

    Staff.create({
        name: req.body.name,
        position: req.body.position,
        email: req.body.email,
        country: req.body.country
    }, (err, newStaff) => {
        if (err) {
            return res.status(500).json({message: err})
        } else {
            return res.status(200).json({message: "new staff created", newStaff})
        }
    })
})

// fetches all staff data and send to client
app.get('/staff', (req, res) => {
    Staff.find({}, (err, staff) =>{
        if(err) {
            return res.status(500).json ({message: err})
        } else {
            return res. status(200).json({ staff })
        }
    })
})

// fetches staff data by Id and send response to client
app.get('/staff/:id', (req, res) => {
    Staff.findById(req.params.id, (err, staff) =>{
        if(err) {
            return res.status(500).json ({message: err})
        } else if (!staff) {
            return res. status(404).json ({message: "staff not found"})
        } else { 
            return res. status(200).json({ staff })
        }
    })
})

//update a staff in the database
app.put('/staff/:id', (req, res) => {
    Staff.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        position: req.body.position,
        email: req.body.email
    }, (err, staff) => {
        if (err) {
            return res.status(500).json ({message: err}) 
        } else if (!staff) {
            return res. status(404).json ({message: "staff not found"})
        }   else { 
            staff.save((err, savedStaff) => {
                if (err) {
                    return res. status(400).json ({message: err})
                } else {
                  return res.status(200).json ({message: "staff updated succesfully"})
                }
            });
        } 
    })    
}) 
 

//Delete a staff from the database
app.delete('/staff/:id', (req, res) => {
    Staff.findByIdAndDelete(req.params.id, (err, staff) => {
        if (err) {
            return res.status(500).json({message: err})
        }
        else if (!staff) {
            return res.status(404).json({message: "staff was not found"})
        }
        else {
            return res. status(200).json ({message: "staff deleted successfully"})
        }
    })
})




//ask app to listen to designated port
app.listen(port, () => console.log (`app listening on port ${port}`));
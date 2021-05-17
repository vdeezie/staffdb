const Staff = require('../models/staff');

exports.createNewStaff = (req, res) => {

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
} 

exports.fetchStaff = (req, res) => {
    Staff.find({}, (err, staff) =>{
        if(err) {
            return res.status(500).json ({message: err})
        } else {
            return res. status(200).json({message: "successful", data: staff})
        }
    })
}

exports.fetchsingleStaff =  (req, res) => {
    Staff.findById(req.params.id, (err, staff) =>{
        if(err) {
            return res.status(500).json ({message: err})
        } else if (!staff) {
            return res. status(404).json ({message: "staff not found"})
        } else { 
            return res. status(200).json({ staff })
        }
    })
}

exports.updatesingleStaff = (req, res) => {
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
}

exports.deletesingleStaff = (req, res) => {
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
}
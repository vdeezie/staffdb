const express = require ('express');
const router = express.Router()
const StaffCtrl = require('../controllers/staffControllers');
//creates a new staff 
router.post('/staff', StaffCtrl.createNewStaff)

// fetches all staff data and send to client
router.get('/', StaffCtrl.fetchStaff)
 
// router.get('/staff', StaffCtrl.fetchStaff)

// fetches staff data by Id and send response to client
router.get('/staff/:id', StaffCtrl.fetchsingleStaff)

//update staff record in the database
router.put('/staff/:id', StaffCtrl.updatesingleStaff)

//Delete a staff by Id from the database
router.delete('/staff/:id', StaffCtrl.deletesingleStaff);

module.exports = router;

//require express module
const express = require ('express');
const app = express();

//connect application to mongodb
const connectionString = "mongodb://localhost:27017/staff"
const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//configure app to fetch data from request body
app.use(express.json())


//CRUD 

//to get the list of available staff on the database
app.get('/staff', (req, res)=> {
    client.connect((err, connectedClient) => {
        if (err) return res.status(500).json({message: err});
        const db = connectedClient.db();
        db.collection("staff").find({}).toArray((err, result) => {
            if (err) {
                return res.status (500).json({message: err})
            }
            return res.status(200).json({books: result })
        })
    })
})

// //Add a new staff to the database
app.post('/staff', (req, res)=> {
    client.connect((err, connectedClient) => {
        if (err) {
            return res.status(500).json({message: err})
        } 
        const db = connectedClient.db();
        db.collection("staff").insertOne({
            name: req.body.name,
            position: req.body.position,
            email: req.body.email,
            country: req.body.country
        }, (err, result) => {
                if(err) return res.status(500).json({message: err});
                return res.status(200).json({message: "new staff has been added to database" })
        })
    })
}) 

//update a staff in the database
app.post

//Delete a staff from the database
app.delete




//ask app to listen to port 5000
app.listen(3000,() =>console.log ('server up and running'))
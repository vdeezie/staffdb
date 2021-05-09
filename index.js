//require express module
const express = require ('express');
const app = express();

//connect application to mongodb
const connectionString = "mongodb://localhost:27017/bookshop"
const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//configure app to fetch data from request body
app.use(express.json())


//CRUD 

//to get the list of available books on the database
app.get('/books', (req, res)=> {
    client.connect((err, connectedClient) => {
        if (err) return res.status(500).json({message: err});
        const db = connectedClient.db();
        db.collection("books").find({}).toArray((err, result) => {
            if (err) {
                return res.status (500).json({message: err})
            }
            return res.status(200).json({books: result })
        })
    })
})

//Add a new book to the database
app.post('/books', (req, res)=> {
    client.connect((err, connectedClient) => {
        if (err) {
            return res.status(500).json({message: err})
        } 
        const db = connectedClient.db();
        db.collection("books").insertOne({
            author: req.body.author,
            title: req.body.title
        }, (err, result) => {
                if(err) return res.status(500).json({message: err});
                return res.status(200).json({message: "new book has been added to bookshop" })
        })
    })
}) 







//ask app to listen to port 5000
app.listen(4000,() =>console.log ('server up and running'))
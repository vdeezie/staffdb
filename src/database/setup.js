//set up mongoose to connect to Atlas DB
const mongoose = require ('mongoose');
const url = `mongodb+srv://vdeezie:595983fc@cluster0.pywbo.mongodb.net/<staff>?retryWrites=true&w=majority`;

module.exports = function () {
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true, 
    useFindAndModify: false
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
}
# staffdb
staffdb is a crudapp using Express NodeJs to list and update and delete records from the staff table in the Mongodb database. Can be easily configured to use another remote data service.


# routes
app.post('/staff' //creates a new staff

app.get('/' //fetches all staff data in the Mongodb database

app.get('/staff/:id' // fetches staff data by Id and send response to client

app.put('/staff/:id' //update a staff record by Id in the database

app.delete('/staff/:id' //deletes a staff record by Id in the database

# Test
app was deployed and hosted on heroku after undergoing GET, POST, PUT and DELETE locally on Postman

https://staffcrudapp.herokuapp.com/
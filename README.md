# staffdb
staffdb is a crudapp using Express NodeJs to list and update and delete records from the staff table in the Mongodb database. Can be easily configured to use another remote data service.


# staffroutes folders
the source (src) folder contains all subfolders and files that deals with the application directly. 
which are;
# controllers
contains the request and response functions for staff
# database
contains the Mongoose database functions for staff
# Models
contains Moongoose database schema for staff
# routes
here contains 
application routes which are outlined below

routes.post('/staff' //creates a new staff

routes.get('/' //fetches all staff data in the Mongodb database

routes.get('/staff/:id' // fetches staff data by Id and send response to client

routes.put('/staff/:id' //update a staff record by Id in the database

routes.delete('/staff/:id' //deletes a staff record by Id in the database

# index.js
contains application entry file

# Test
app was deployed and hosted on heroku after undergoing GET, POST, PUT and DELETE locally on Postman

https://staffcrudapp.herokuapp.com/
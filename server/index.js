// bring in dotenv package
require('dotenv').config();
const express = require('express');
const app = express();
// import massive 
const massive = require('massive');

app.use(express.json());
// destructure variables from .env file
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const {getStudents, addStudent, updateStudent} = require('./controller/studentsCtrl')

massive(CONNECTION_STRING).then( db => {
    console.log('connected to db')
    app.set('db', db)
})

app.get('/api/get_students', getStudents)
app.post('/api/add_student', addStudent)
app.put('/api/update_student/:id', updateStudent)

app.listen( SERVER_PORT, () => {console.log(`listening on port ${SERVER_PORT}`)})
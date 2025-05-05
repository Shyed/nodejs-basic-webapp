var express = require('express');
var app = express();
const path = require('path')
const port = 3000

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

/* GET home page. */
app.get('/home', function(req, res, next) {
    /*
    Add a few lines of code to the above /home route to create an array of student’s 
    information that hold name, age and major of each student. Add at least two students 
    to the array and pass it to the profile page.
    */

    let students = [
        {
            name: 'John Smith',
            age: 20,
            major: 'Business'
        },
        {
            name: 'Tom Hill',
            age: 19,
            major: 'Education'
        } 
    ];

    res.render('profile', {
        students : students
    });
});

app.listen(port, () => console.log(`My app listening at http://localhost:${port}`))

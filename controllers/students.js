import { Student } from "../models/student.js";

function index(req, res) {
    Student.find({})
    .then(students => {
        res.render('students/index', {
            students: students
        })
    })
    .catch(error => {
        console.log(error);
        res.redirect('/')
    })
}

function newStudent(req, res) {
    res.render('students/new')
}

export {
    index,
    newStudent as new,
}
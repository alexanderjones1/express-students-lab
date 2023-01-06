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

function create(req, res) {
    req.body.enrolled === 'on' ? req.body.enrolled = true : req.body.enrolled = false
    Student.create(req.body)
    .then(student => {
        res.redirect('/students')
    })
    .catch(error => {
        console.log(error);
        res.redirect('/students')
    })
}

function show(req, res) {
    Student.findById(req.params.id)
    .then(student => {
        res.render('students/show', {
            student: student
        })
    })
    .catch(error => {
        console.log(error);
        res.redirect('/students')
    })
}

export {
    index,
    newStudent as new,
    create,
    show,
}
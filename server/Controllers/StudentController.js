const Student = require("../Models/StudentModel");
const asyncHandler = require('express-async-handler');

exports.addStudent = asyncHandler(async(req, res, next)=> {
    const newStudent = await Student.create(req.body);
    res.status(201).json({success: newStudent});
})

exports.getStudents = asyncHandler(async(req, res, next) => {
    const tag = req.query.tag;
    const avgMarks = req.query.marks;
    const major = req.query.major;
    req.query.avgMarks = { "$gte": req.query.avgMarks || 65}

    // const students = await Student.find({tag, avgMarks, major})
    const students = await Student.find(req.query)
    res.status(201).json({success: {results: students.length, students: students}})
})
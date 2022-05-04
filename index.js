const ExplorerService = require("./app/Services/ExplorerServices");
const Reader = require("./app/utils/Reader");
const students = Reader.readJsonFile("students.json")

const totalStudents = ExplorerService.allStudents(students)
const names = totalStudents.map(student => student.name);
console.log(names)
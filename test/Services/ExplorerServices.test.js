const ExplorerService = require("./../../app/Services/ExplorerServices");
const Reader = require("./../../app/utils/Reader");
const students = Reader.readJsonFile("students.json")

describe("Test de ExplorerService", () => {
    test(" Obtener todos los estudiantes", () =>{
        const totalStudents = ExplorerService.allStudents(students);
        const names = totalStudents.map(student => student.name);
        expect(names).toContain("Kara")
    }); 
})

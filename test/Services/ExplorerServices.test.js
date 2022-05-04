const ExplorerService = require("./../../app/Services/ExplorerServices");
const Reader = require("./../../app/utils/Reader");
const students = Reader.readJsonFile("students.json")

describe("Test de ExplorerService 1", () => {
    test(" Obtener todos los estudiantes", () =>{
        const totalStudents = ExplorerService.allStudents(students);
        const names = totalStudents.map(student => student.name);
        expect(names).toContain("Kara")
    }); 
})
describe("Test de ExplorerService 2", () => {
    test(" Obtener email de estudiantes con certificación", () =>{
        const emailsWithCert = ExplorerService.emailStudentsWithCert(students, true);
        expect(emailsWithCert).toContain("Montoya@visualpartnership.xyz")
    }); 
})
describe("Test de ExplorerService 3", () => {
    test(" Obtener estudiantes con creditos mayor a 500", () =>{
        credits = 500
        const above500Names = ExplorerService.studentsWithCredit500(students, credits);
        expect(above500Names).toContain("Cora")
    }); 
})

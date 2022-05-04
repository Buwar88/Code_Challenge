const ExplorerController = require("../../app/controllers/ExplorerController");

describe("Test de ExplorerController 1", () => {
    test(" Obtener todos los estudiantes", () =>{
        const totalStudents = ExplorerController.allStudents();
        const names = totalStudents.map(student => student.name);
        expect(names).toContain("Kara")
    }); 
})
describe("Test de Explorercontroller 2", () => {
    test(" Obtener email de estudiantes con certificación", () =>{
        const emailsWithCert = ExplorerController.emailWithCertification(true);
        expect(emailsWithCert).toContain("Montoya@visualpartnership.xyz")
    }); 
})
describe("Test de ExplorerController 3", () => {
    test(" Obtener estudiantes con creditos mayor a 500", () =>{
        const above500Names = ExplorerController.above500Students(500);
        expect(above500Names).toContain("Cora")
    }); 
})
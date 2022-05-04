const ExplorerService = require("./../../app/Services/ExplorerServices");
const Reader = require("./../../app/utils/Reader");
const students = Reader.readJsonFile("students.json");


class ExplorerController {
    
    static allStudents(){      
        return students;
    }
    static emailWithCertification(haveCertification){
        return ExplorerService.emailStudentsWithCert(students, haveCertification);
    }
    static above500Students(credits){
        return ExplorerService.studentsWithCredit500(students, credits);
    }
}

module.exports = ExplorerController
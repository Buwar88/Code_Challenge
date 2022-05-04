
class ExplorerService {
    static allStudents(students){
        return students
    };
    static emailStudentsWithCert(students){
        const studentsWithCert = students.filter(student => student.haveCertification === true);
        const studentsEmailWithCert = studentsWithCert.map(student => student.email);
        return studentsEmailWithCert;
    };
    static studentsWithCredit500(students){
        const studentsCredit = students.filter(student => student.credits > 500);
        const studentsAbove500 = studentsCredit.map(student => student.name);
        return studentsAbove500; 
    }

    
}

module.exports = ExplorerService
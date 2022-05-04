
class ExplorerService {
    static allStudents(students){
        return students
    }
    static emailStudentsWithCert(students, haveCertification){
        const studentsWithCert = students.filter(student => student.haveCertification === haveCertification);
        const studentsEmailWithCert = studentsWithCert.map(student => student.email);
        return studentsEmailWithCert;
    }
    static studentsWithCredit500(students, credits){
        const studentsCredit = students.filter(student => student.credits > credits);
        const studentsAbove500 = studentsCredit.map(student => student.name);
        return studentsAbove500; 
    }

    
}

module.exports = ExplorerService
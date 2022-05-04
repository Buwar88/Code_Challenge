
class ExplorerService {
    static allStudents(students){
        return students
    };
    static emailStudentsWithCert(students){
        const studentsWithCert = students.filter(student => student.haveCertification === true);
        const studentsEmailWithCert = studentsWithCert.map(student => student.email);
        return studentsEmailWithCert;
    }

    
}

module.exports = ExplorerService
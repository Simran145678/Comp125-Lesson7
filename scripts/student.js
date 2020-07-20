//namespace objects
(function(objects)
{
    class Student extends objects.Person
{
    constructor(name,age,studentId)
    {
        super(name,age);
        this.StudentId=studentId;
    }
    get StudentId(){
        return this.m_studentId;
    }
    set StudentId(value){
        this.m_studentId = value;
    }

    Studies()
    {
        console.log(`${this.Name} is studying`);
    }
}
objects.Student = Student;
}(objects || (objects={})));
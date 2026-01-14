import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    {
      id: 1,
      name: 'Shoaib',
      age: 23,
    },
    {
      id: 2,
      name: 'exodus',
      age: 23,
    },

    {
      id: 3,
      name: 'rafay',
      age: 20,
    },
  ];

  getAllStudents() {
    return this.students;
  }
  getStudentbyId(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new NotFoundException('Student not found!');
    }
    return student;
  }
  addStudent(student: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...student,
    };
    this.students.push(newStudent);
    return newStudent;
  }
  updateStudent(id:number, data:{name:string, age:number})
  {
    const student = this.students.find((student)=>student.id ===id);
    if(!student)
    {
        throw new NotFoundException("Student not found");
    }
    student.age=data.age;
    student.name=data.name;
    return student; 
  }
  patchStudent(id:number, data:Partial<{name:string, age:number}>)
  {
    const student = this.getStudentbyId(id)
    
    Object.assign(student,data)
    return student;
   
  }
  deleteStudent(id:number)
  {
    const index = this.students.findIndex((s)=>s.id === id)
    if(index === -1)
    {
        throw new NotFoundException("Student not found");
    }
    const deleted =this.students.splice(index,1)
    return {message:"Student deleted Successfully",deleted}
  }
}

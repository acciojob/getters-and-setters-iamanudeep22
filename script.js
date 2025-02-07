//complete this code
class Person {
	constructor(name, age){
        this._name = name;
        this._age = age;
    }
    
    getName(){
        return this._name;
    }
    setName(age){
        this._age = age;
    }

	getAge(){
		return this._age;
	}
}

class Student extends Person {
	study(){
        console.log(this.name +" is studying");
    }
}

class Teacher extends Person {
	teach(){
        console.log(this.name +" is teaching");
    }
}

// const person = new Person("John", 30);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

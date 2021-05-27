class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get gender() {
    return this._gender;
  }
  get age() {
    return this._age;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }
  set lastName(lastName) {
    this._lastName = lastName;
  }
  set gender(gender) {
    this._gender = gender;
  }
  set age(age) {
    this._age = age;
  }

  toString() {
    return (
      this._firstName + " " + this._lastName + ", " + this._age + " years old"
    );
  }
}

let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString()); // Name Surname, 23 years old.

class Student extends Person {
  constructor(firstName, lastName, fee, program) {
    super({ firstName, lastName });
    this._year = 0;
    this._fee = fee;
    this._program = program;
    this.exams = 0;
  }

  get year() {
    return this._year;
  }
  get fee() {
    return this._fee;
  }
  get program() {
    return this._program;
  }

  set year(year) {
    this._year = year;
  }
  set fee(fee) {
    this._fee = fee;
  }
  set program(program) {
    this._program = program;
  }

  passExam(programName, grade) {
    if (grade >= 50) {
      this.exams++;
      if (this.exams === this._program.length) this._year++;
    }
  }
  isAllPassed() {
    if (this.exams === this._program.length) return "All passed";
    else return "Not passed some programs";
  }
  toString() {
    return "Ok";
  }
}

let programs = [
  { programName: "arm", grade: 10 },
  { programName: "math", grade: 50 },
  { programName: "english", grade: undefined },
];

let student1 = new Student("Ani", "Keshishyan", 0, programs);
programs.forEach((element) => {
  student1.passExam(element.programName, element.grade);
});

console.log(student1.isAllPassed());

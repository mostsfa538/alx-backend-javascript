interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

const studentsList: Student[] = [student1, student2];

for (let i = 0; i < studentsList.length; i++) {
    console.log(`Name: ${studentsList[i].firstName} ${studentsList[i].lastName}, Age: ${studentsList[i].age}, location: ${studentsList[i].location}`);
}

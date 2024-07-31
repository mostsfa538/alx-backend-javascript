interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number,
    [key: string]: any;
};

interface Directors extends Teacher {
    numberOfReports: number;
};

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

interface printTeacherFunction {
    (first: string, last: string): string;
};

const printTeacher: printTeacherFunction = (first: string, last: string): string => `${first[0]}. ${last}`;

interface StudentInterface {
    workOnHomework(): string,
    displayName(): string
};

class StudentClass implements StudentInterface {
    
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
};

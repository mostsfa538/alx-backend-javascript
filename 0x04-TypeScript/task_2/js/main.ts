interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
};

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
};

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: string | number) Teacher | Director {
  return (typeof salary === 'number' && salary < 500 ? new Teacher() : new Director());
}

function isDirector(employee: Director | Teacher) employee is Director {
  return (employee instanceof Director);
}

function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    return (todayClass == "Math" ? 'Teaching Math' : 'Teaching History');
}

console.log(teachClass('Math'));
console.log(teachClass('History'));

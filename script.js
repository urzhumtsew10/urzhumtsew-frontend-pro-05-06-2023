// ================== Homework #18 ==================

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const today = new Date();
const currentYear = today.getFullYear();

class Student {
  constructor(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
  }

  attendingLesson = new Array(25);
  evaluations = [];

  getAge() {
    return currentYear - Number(this.birthYear);
  }

  present() {
    if (this.attendingLesson.includes(undefined)) {
      this.attendingLesson.shift();
      this.attendingLesson.push(true);
      this.evaluations.push(getRandomInt(10, 100));
    } else {
      console.log("The array already has 25 records");
    }
  }

  absent() {
    if (this.attendingLesson.includes(undefined)) {
      this.attendingLesson.shift();
      this.attendingLesson.push(false);
    } else {
      console.log("The array already has 25 records");
    }
  }

  getAverageScore() {
    const sumScores = this.evaluations.reduce((acc, x) => {
      return (acc += x);
    }, 0);

    return sumScores / this.evaluations.length;
  }

  summary() {
    const visits = this.attendingLesson
      .filter((x) => x === true)
      .reduce((acc, x) => {
        return (acc += 1);
      }, 0);

    const numberOfLessons = this.attendingLesson.filter(
      (x) => x === true || x === false
    ).length;

    if (visits / numberOfLessons >= 0.9 && this.getAverageScore() >= 90) {
      console.log(`${this.name}, well done!`);
    } else if (visits / numberOfLessons < 0.9 && this.getAverageScore() < 90) {
      console.log(`${this.name}, Radish!`);
    } else if (visits / numberOfLessons < 0.9 || this.getAverageScore() < 90) {
      console.log(`${this.name}, Good, but can better.`);
    }
  }
}

const student = new Student("Ivan", "Ivanov", 2006);
console.log(student.getAge());
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.absent();
console.log(student.evaluations);
console.log(student.getAverageScore());
student.summary();

const student2 = new Student("Petr", "Petrov", 2002);
console.log(student2.getAge());
student2.present();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.absent();
console.log(student2.evaluations);
console.log(student2.getAverageScore());
student2.summary();

const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {} // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {
  /*
    If the score is greater than 90, increment grades.A by 1.

    You can use a series of `if/then` blocks, but you could
    also achieve this with a switch statement.
  */

  switch(true) {
    case scores[i]>=90:
      grades.A = (grades.A || 0) + 1;
      break;
    case scores[i]>=80:
      grades.B = (grades.B || 0) + 1;
      break;
    case scores[i]>=75:
      grades.C = (grades.C || 0) + 1;
      break;
    case scores[i]>=70:
      grades.D = (grades.D || 0) + 1;
      break;
    default:
      grades.F = (grades.F || 0) + 1;
      break;
  }

}

console.info(grades);

/* Output how many of each grade */

for (grade in grades) {
  console.info(`There were ${grades[grade]} ${grade}'s`);
}

/* Output the lowest score */

let lowestScore = scores.sort((a, b) => a - b)[0];
console.info("Lowest Score:", lowestScore);

/* Output the highest score */

let highestScore = scores.sort((a, b) => b - a)[0];
console.info("Highest Score:", highestScore);

/* Find the most common grade and output */

let highestGradeCount = 0;
let highestGrade;

for (grade in grades) {
  if(grades[grade] > highestGradeCount) {
    highestGradeCount = grades[grade];
    highestGrade = grade;
  }
}

console.log("Most Common Grade:", highestGrade);

/* Find the least common grade and output */

let lowestGradeCount = 100;
let lowestGrade;

for (grade in grades) {
  if(grades[grade] < lowestGradeCount) {
    lowestGradeCount = grades[grade];
    lowestGrade = grade;
  }
}

console.log("Least Common Grade:", lowestGrade);
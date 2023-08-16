const age = 33;
function isAdult(age) {
  if (age < 18) {
    return true;
  } else {
    return false;
  }
}
console.log(isAdult(age));

const student1Score = 100;
function didStudentPass(score) {
  if (student1Score >= 70) {
    return true;
  } else {
    return false;
  }
}
console.log(didStudentPass(student1Score));

const student2Score = 105;
function gradeCalculator(score) {
  if (student2Score < 50) {
    return 'F';
  } else if (student2Score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
}
console.log(gradeCalculator(student2Score));

const season = 'spring';
function seasonMessenger(season) {
  if (season === 'summer') {
    return "it's hot today";
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else {
    return 'please enter a valid season';
  }
}
console.log(seasonMessenger(season));

const dayOfTheWeek = 'Tuesday';
function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend!';
  } else {
    return 'Its a weekday!';
  }
}
console.log(dayDetector(dayOfTheWeek));

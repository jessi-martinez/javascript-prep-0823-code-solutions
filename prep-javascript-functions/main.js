function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const hoursResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', hoursResult);

function getGreeting(name) {
  return name;
}
const nameResult = getGreeting('World');
console.log('"Hello ' + nameResult + '!"');

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log(addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log(multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log(subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
const getCircleCircumferenceResult = getCircleCircumference(5);
console.log(getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const getFullNameResult = getFullName('Juan', 'Ramirez');
console.log(getFullNameResult);

function cube(number) {
  return number * number * number;
}
const cubeResult = cube(5);
console.log(cubeResult);

function whileLoop1() {
  const array = [];
  let a = 0;
  while (a < 10) {
    array.push(a);
    a++;
  }
  return array;
}
console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const array = [];
  let a = 0;
  while (a < 19) {
    array.push(a);
    a += 2;
  }
  return array;
}
console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const array = [];
  for (let a = 0; a < 10; a++) {
    array.push(a);
  }
  return array;
}
console.log('forLoop1 output', forLoop1());

function forLoop2() {
  const countdown = [];
  for (let a = 100; a > 0; a--) {
    console.log('Time till explosion' + countdown.push(a) + '!');
  }
  return countdown;
}
forLoop2();

function forInLoop1(object) {
  const array = [];
  for (const property in object) {
    array.push(property);
  }
  return array;
}
const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
console.log('forInLoop1 output', forInLoop1(object));

function forInLoop2(object) {
  const array = [];
  for (const property in object) {
    array.push(object[property]);
  }
  return array;
}
console.log('forInLoop2 output', forInLoop2(object));

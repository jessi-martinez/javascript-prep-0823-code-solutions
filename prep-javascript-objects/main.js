const person = {
  firstName: 'Jess',
  lastName: 'Martinez',
  hobby: 'Photography',
};
console.log(person);
const fullName = 'Jess' + ' ' + 'Martinez';
console.log("This person's name is:", fullName + '.');

person.job = 'Claims Examiner';
console.log("This person's current job is:", person.job + '.');

person['previousJob'] = 'Field Claims Adjuster';
console.log("The person's previous job is:", person['previousJob'] + '.');

console.log('The complete person', typeof person + ':', person);

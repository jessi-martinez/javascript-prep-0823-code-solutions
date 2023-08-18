/* exported getWords */

function getWords(string) {
  let array;
  if (string !== '') {
    array = string.split(' ');
    return array;
  } else {
    return [];
  }
}

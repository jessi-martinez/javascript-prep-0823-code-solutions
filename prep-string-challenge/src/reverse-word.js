/* exported reverseWord */

function reverseWord(word) {
  let backWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    backWord += word.charAt(i);
  }
  return backWord;
}

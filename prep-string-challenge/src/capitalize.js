/* exported capitalize */

function capitalize(word) {
  const firstLetter = word.charAt(0);
  const allOtherLetters = word.slice(1); // Corrected this line
  const capitalString =
    firstLetter.toUpperCase() + allOtherLetters.toLowerCase();
  return capitalString;
}

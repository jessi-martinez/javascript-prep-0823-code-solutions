/* exported isVowel */

function isVowel(character) {
  let char = character;
  char = char.toUpperCase();
  return (
    char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'
  );
}

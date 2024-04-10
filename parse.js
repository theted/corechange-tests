const LETTERS = "abcdefghijklmnopqrstuvwxyz";
const WOVELS = "aeiou";

export const parse = (str) => {
  let output = "";
  let computedStr = str.toLowerCase();

  for (let i = 0; i < computedStr.length; ++i) {
    const letter = computedStr[i];
    let tempLetter = letter;

    // if the character is a letter, the letter should be changed to the next letter in the alphabet
    // NOTE: this does not handle 'z' which is not a problem in this case since it is handled separately
    if (LETTERS.includes(letter)) {
      tempLetter = LETTERS[LETTERS.indexOf(letter) + 1];
    }

    // if the (new) letter is a vowel, it must be capitalized
    if (WOVELS.includes(tempLetter)) {
      tempLetter = tempLetter.toUpperCase();
    }

    // if the letter is a ‘z’, the letter should be changed to an ‘a’
    if (letter === "z") {
      tempLetter = "a";
    }

    output += tempLetter;
  }

  return output;
};

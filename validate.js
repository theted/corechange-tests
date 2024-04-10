const ALPHA = /^[a-zA-Z]+$/;
const ALPHANUMERIC_OR_UNDERSCORE = /^[a-zA-Z0-9_]+$/;

const isAlpha = (value) => ALPHA.test(value);
const isAlphanumericOrUnderscore = (value) =>
  ALPHANUMERIC_OR_UNDERSCORE.test(value);

export const validate = (value) => {
  // value must be a string of minimum 4 characters and a maximum of 25
  if (value.length < 4 || value.length > 25) {
    return false;
  }

  // value must be an alphanumerical character or underscoree
  if (!isAlphanumericOrUnderscore(value)) {
    return false;
  }

  // the first character must be a character between a-z/A-Z
  if (!isAlpha(value[0])) {
    return false;
  }

  // the last character cannot be an underscore
  if (value[value.length - 1] === "_") {
    return false;
  }

  // all checks passed
  return true;
};

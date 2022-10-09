export function captializeFirstLetter(phrase) {
  return phrase.charAt(0).toUpperCase() + phrase.slice(1);
}

export function roundOneDecimalPoint(num) {
  return Math.round(num * 10) / 10;
}

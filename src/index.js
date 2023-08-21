module.exports = function toReadable(number) {
      const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number === 0) {
    return 'zero';
  }
    const wordsForNumber = [];
  if (number < 20) {
    wordsForNumber.push(ones[number]);
  } else {
    const hundreds = Math.floor(number / 100);
    const tensAndOnes = number % 100;

    if (hundreds > 0) {
      wordsForNumber.push(ones[hundreds] + ' hundred');
    }
    if (tensAndOnes > 0) {
      if (tensAndOnes < 20) {
        wordsForNumber.push(ones[tensAndOnes]);
      } else {
        const tensDigit = Math.floor(tensAndOnes / 10);
        const onesDigit = tensAndOnes % 10;
        wordsForNumber.push(tens[tensDigit]);
        if (onesDigit > 0) {
          wordsForNumber.push(ones[onesDigit]);
        }
      }
    }
  }

  return wordsForNumber.join(' ');
}

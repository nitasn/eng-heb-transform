/**
 * This JS is intended to be used as a macOS's "Quick Action".
 * Please see README.md.
 */


const engToHeb = {
  "(": ")", ")": "(",
  "q": "/", "w": "'", "e": "ק", "r": "ר", "t": "א", "y": "ט", "u": "ו", "i": "ן", "o": "ם", "p": "פ", "[": "]", "]": "[",
  "a": "ש", "s": "ד", "d": "ג", "f": "כ", "g": "ע", "h": "י", "j": "ח", "k": "ל", "l": "ך", ";": "ף", "\\": "ֿ", "'": ",",
  "`": ";", "z": "ז", "x": "ס", "c": "ב", "v": "ה", "b": "נ", "n": "מ", "m": "צ", ",": "ת", ".": "ץ", "<": ">", ">": "<", "/": ".",
};

const hebToEng = Object.fromEntries(Object.entries(engToHeb).map(([key, value]) => [value, key]));


function transform(text) {
  let engVotes = 0, hebVotes = 0;

  for (const letter of text) {
    if (letter in engToHeb) {
      engVotes++;
    }
    if (letter in hebToEng) {
      hebVotes++;
    }
  }

  const mapping = engVotes > hebVotes ? engToHeb : hebToEng;

  return [...text].map((ch) => ch in mapping ? mapping[ch] : ch).join("");
}

function run(input) {
  const text = input.join("");
  return transform(text);
}

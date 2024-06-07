/*
 *   How to Apply Shortcut
 *  -----------------------
 *
 * 1. Automator -> Create "Quick Action" -> Paste JS
 *    1.1. In "Workflow receives current" choose "text"
 *    1.2. Check the "Output replaces selected text" checkbox
 *    1.3. Save via Cmd+S and name it (e.g. "EngHebTransfom")
 *
 * 2. System Settings -> Keyboard -> Keyboard Shortcuts -> Services -> Text
 *    2.1. Find "EngHebTransfom" at the bottom
 *    2.2  Double click "EngHebTransfom" and choose keyboard shortcut
 */


function run(input) {
  const originalText = input.join("");
  const transformedText = transform(originalText);

  /*
   * If "Output replaces selected text" is unavailable,
   * We can use the clipboard to write our text.
   */

  // const app = Application.currentApplication();
  // app.includeStandardAdditions = true;
  // app.setTheClipboardTo(transformedText);
  // const systemEvents = Application("System Events");
  // systemEvents.keystroke("v", { using: ["command down"] });

  return transformedText;
}


function transform(originalText) {
  let engVotes = 0, hebVotes = 0;

  for (const letter of originalText) {
    if (letter in engToHeb) {
      engVotes++;
    }
    if (letter in hebToEng) {
      hebVotes++;
    }
  }

  const mapping = engVotes > hebVotes ? engToHeb : hebToEng;

  return [...originalText].map((ch) => ch in mapping ? mapping[ch] : ch).join("");
}


const engToHeb = {
  "`": ";",
  "=": "[",
  "q": "/",
  "w": "'",
  "e": "ק",
  "r": "ר",
  "t": "א",
  "y": "ט",
  "u": "ו",
  "i": "ן",
  "o": "ם",
  "p": "פ",
  "\\": "ֿ",
  "a": "ש",
  "s": "ד",
  "d": "ג",
  "f": "כ",
  "g": "ע",
  "h": "י",
  "j": "ח",
  "k": "ל",
  "l": "ך",
  ";": "ף",
  "'": ",",
  "z": "ז",
  "x": "ס",
  "c": "ב",
  "v": "ה",
  "b": "נ",
  "n": "מ",
  "m": "צ",
  ",": "ת",
  ".": "ץ",
  "/": "."
};

const hebToEng = Object.fromEntries(Object.entries(engToHeb).map(([k, v]) => [v, k]));

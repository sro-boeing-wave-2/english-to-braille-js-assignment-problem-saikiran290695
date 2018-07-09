/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

function respond() {
  const data = document.getElementById('sourceLangText').value;
  const splitdata = data.split('');
  let convertdata = [];
  for (let i = 0; i < splitdata.length; i += 1) {
    for (let j = 0; j < englishToBrailleLiteralSet.length; j += 1) {
      if (splitdata[i] === englishToBrailleLiteralSet[j][0]) {
        convertdata += englishToBrailleLiteralSet[j][1];
      }
    }
  }
  document.getElementById('targetLangText').innerHTML = convertdata;
}
window.onload = function () {
  document.getElementById('btnConvertEnglishToBraille').addEventListener('click', respond);
};

/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

function respond() {
  const brailmap = new Map(englishToBrailleLiteralSet);
  const data = document.getElementById('sourceLangText').value;
  const splitdata = data.split('');
  let condata = [];
  splitdata.forEach((element) => {
    condata += brailmap.get(element);
  });
  document.getElementById('targetLangText').innerHTML = condata;
}
window.onload = function () {
  document.getElementById('btnConvertEnglishToBraille').addEventListener('click', respond);
};

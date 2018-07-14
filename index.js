/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

const brailmap = new Map(englishToBrailleLiteralSet); //  convert 2D to MAP's
function respond() {
  const data = document.getElementById('sourceLangText').value; //  get input text from div
  const splitdata = data.split(''); //  convert text to array
  let condata = '';
  splitdata.map((element) => {
    condata += brailmap.get(element);
    return condata;
  });
  document.getElementById('targetLangText').innerHTML = condata;
}
//  Wait till page gets loaded
window.onload = () => {
  document.getElementById('btnConvertEnglishToBraille').addEventListener('click', respond);
};

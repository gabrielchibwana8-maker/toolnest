let text = document.getElementById("textInput");


function countText(){

let value = text.value.trim();


let words = value.length ? value.split(/\s+/).length : 0;


let characters = text.value.length;


let sentences = value.split(/[.!?]+/)
.filter(Boolean).length;



document.getElementById("words").innerHTML = words;

document.getElementById("characters").innerHTML = characters;

document.getElementById("sentences").innerHTML = sentences;

}



function upperCase(){

text.value = text.value.toUpperCase();

countText();

}



function lowerCase(){

text.value = text.value.toLowerCase();

countText();

}



function removeSpaces(){

text.value = text.value.replace(/\s+/g," ").trim();

countText();

}



function copyText(){

navigator.clipboard.writeText(text.value);

alert("Text copied!");

}



function clearText(){

text.value = "";

countText();

}
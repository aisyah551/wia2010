const input = document.getElementById("input");

const character = "ش";
input.textContent = character;
console.log(character.charCodeAt(0));
console.log(String.fromCharCode(0x0628, 0x0633, 0x0645));
const str = String.fromCharCode(0x0628, 0x0633, 0x0645);
input.textContent = str;

input.style.fontSize = "1.5rem";
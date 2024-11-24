const input = document.getElementById("input-arabic-letters");
const output = document.getElementById("output");
const joinBtn = document.getElementById("join-btn");

console.log(String.fromCharCode(0x0628, 0x0633, 0x0645));

joinBtn.addEventListener("click", () => {
    console.log(input.value);
    const inputClean = input.value.split(",").join("");
    console.log(inputClean);

    output.textContent = inputClean;

    /*with the input from smart glove, 
    1. create a string or array from the letters
    2. seperate them
    3. display them
    */
});
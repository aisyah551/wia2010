const param = new URLSearchParams(window.location.search);
const surahNumber = param.get("surahNumber");
console.log(surahNumber, typeof(surahNumber));

const surahEnglishName = document.getElementById("surah-english-name");
const surahName = document.getElementById("surah-name");
const surahNameTranslation = document.getElementById("surah-name-translation");
const displayAyahDiv = document.getElementById("display-ayah-div");
const signDiv = document.getElementById("sign-div");
const ayahsListDiv = document.getElementById("ayahs-list-div");

const surahAPI = "http://api.alquran.cloud/v1/surah/" + surahNumber;
let surahData = {};

//console.log(String.fromCharCode(0x0628, 0x0633, 0x0645));
/*const str = "meow";
console.log(str);
str.split("").forEach(char => {
    console.log(char);
});
Array.from(str).forEach((char) => {
    console.log(char);
});

joinBtn.addEventListener("click", () => {
    console.log(input.value);
    const inputClean = input.value.split(",").join("");

    console.log(inputClean);

    /*for (let i = 0; i < inputClean.length; i++) {
        console.log(inputClean.charCodeAt(i));
    }*/

    //output.textContent = inputClean;

    /*with the input from smart glove, 
    1. create a string or array from the letters
    2. seperate them
    3. display them
    */
//});

const fetchSelectedSurah = async () => {
    try {
        const res = await fetch(surahAPI);
        const surah = await res.json();
        surahData = surah.data;

        console.log(surahData);
        displaySelectedSurah();

    } catch (err) {
        console.log(err);
    }
};

fetchSelectedSurah();

const displaySelectedSurah = () => {
    const { name, englishName, englishNameTranslation, ayahs} = surahData;
    console.log(ayahs);

    surahEnglishName.textContent = `${englishName}`;
    surahName.textContent = `${name}`;
    surahNameTranslation.textContent = `${englishNameTranslation}`;
    displayAyahDiv.textContent = `${ayahs[0].text}`; //default display first ayah

    ayahs.forEach((ayah, index) => {
        const { text } = ayah;

        const ayahDiv = document.createElement("div");
        ayahDiv.className = "ayah-div";
        ayahDiv.textContent = `${text}`;

        ayahDiv.addEventListener("click", () => displayAyahDiv.textContent = `${text}`);

        ayahsListDiv.appendChild(ayahDiv);
    })
}
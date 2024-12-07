//const input = document.getElementById("input-arabic-letters");
//const joinBtn = document.getElementById("join-btn");

const surahList = document.getElementById("surah-list");
const output = document.getElementById("output");

const surahAPI = "http://api.alquran.cloud/v1/surah";
let surahArray = [];
let ayahsArray = [];

console.log(String.fromCharCode(0x0628, 0x0633, 0x0645));
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

const fetchSurah = async () => {
    try {
        const res = await fetch(surahAPI);
        const surah = await res.json();
        //console.log(surah);

        surahArray = surah.data;
        console.log(surahArray);
        displaySurahList(surahArray);

        const surahName = surahArray[0].englishName;
        console.log(surahName);
      
    } catch (err) {
        console.log(err);
    }
  };
  
fetchSurah();

const displaySurahList = (surahArray) => {
    surahList.innerHTML = surahArray.map(item => {
        const { number, englishName, englishNameTranslation, name, numberOfAyahs } = item;

        return `<div class="surah-div" id="${englishName}" onclick="fetchSelectedSurah(${number})">
        <div class="surah-details">
            <p class="surah-name">${number}. <span class="english-name">${englishName}</span> (${name})</p>
            <p class="english-name-translation">English Translation: ${englishNameTranslation}</p>
            <p class="number-of-ayahs">Number of Ayahs: ${numberOfAyahs}</p>
        </div>
        <div class="button">
            <div class="arrow-circle">></div>
        </div>
        </div>`
    }).join("");
}

const fetchSelectedSurah = async (id) => {
    try {
        const selectedSurahAPI = surahAPI + "/" + id.toString();
        //console.log(selectedSurahAPI);

        const res = await fetch(selectedSurahAPI);
        const surah = await res.json();
        ayahsArray = surah.data.ayahs;
        console.log(ayahsArray);
        displaySurah();

    } catch (err) {
        console.log(err);
    }
}

const displaySurah = () => {
    ayahsArray.forEach(item => output.innerHTML += `${item.text}<br/>`);
}
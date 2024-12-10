const surahList = document.getElementById("surah-list");
const output = document.getElementById("output");
const inputSurahName = document.getElementById("input-surah-name");
const searchBtn = document.getElementById("search-btn");

const surahAPI = "http://api.alquran.cloud/v1/surah";
let surahArray = [];
let selectedSurah = {};

const fetchSurah = async () => {
    try {
        const res = await fetch(surahAPI);
        const surah = await res.json();
        //console.log(surah);

        surahArray = surah.data;
        console.log(surahArray);
        displaySurahList();
      
    } catch (err) {
        console.log(err);
    }
  };
  
fetchSurah();

const displaySurahList = () => {
    surahArray.forEach(surah => {
        const { number, englishName, englishNameTranslation, name, numberOfAyahs } = surah;

        const surahDiv = document.createElement("div");
        surahDiv.className = "surah-div";
        surahDiv.id = englishName;

        surahDiv.innerHTML = `
        <div class="surah-details">
                <p class="surah-name">${number}. <span class="english-name">${englishName}</span> (${name})</p>
                <p class="english-name-translation">English Translation: ${englishNameTranslation}</p>
                <p class="number-of-ayahs">Number of Ayahs: ${numberOfAyahs}</p>
            </div>
            <div class="button">
                <i class="fa-solid fa-circle-arrow-right"></i>
        </div>
        `
        surahDiv.addEventListener("click", () => {
            window.location.href = `surahPage.html?surahNumber=${number}`;
        });

        surahList.appendChild(surahDiv);
    });
}

const searchSurah = (index) => {
    const { number, englishName, englishNameTranslation, name, numberOfAyahs } = surahArray[index];

    const surahDiv = document.createElement("div");
    surahDiv.className = "surah-div";
    surahDiv.id = englishName;

    surahDiv.innerHTML = `
    <div class="surah-details">
            <p class="surah-name">${number}. <span class="english-name">${englishName}</span> (${name})</p>
            <p class="english-name-translation">English Translation: ${englishNameTranslation}</p>
            <p class="number-of-ayahs">Number of Ayahs: ${numberOfAyahs}</p>
        </div>
        <div class="button">
            <i class="fa-solid fa-circle-arrow-right"></i>
    </div>
    `
    surahDiv.addEventListener("click", () => {
        window.location.href = `surahPage.html?surahNumber=${number}`;
    });

    output.appendChild(surahDiv);
}

searchBtn.addEventListener("click", () => {
    output.innerHTML = "";
    const inputValue = inputSurahName.value;
    let surahIndex;

    if (!inputValue) {
        alert("Please enter a Surah name or number!");
    }
    else {
        if (isNaN(inputValue)) {
            surahIndex = surahArray.findIndex(surah => surah.englishName === inputValue)
        }
        else {
            surahIndex = parseInt(inputValue) - 1;
        }

        searchSurah(surahIndex); 
    }
});
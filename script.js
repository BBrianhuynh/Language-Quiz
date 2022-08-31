console.log("script running");

// Fix these querySelectors so that they each select the correct element.
const englishTile = document.querySelector("#English");
const spanishTile = document.querySelector("#Spanish");
const chineseTile = document.querySelector("#Chinese");
const tagalogTile = document.querySelector("#Tagalog");
const vietnameseTile = document.querySelector("#Vietnamese");
const arabicTile = document.querySelector("#Arabic");
const frenchTile = document.querySelector("#French");
const koreanTile = document.querySelector("#Korean");
const russianTile = document.querySelector("#Russian");
const portugeseTile = document.querySelector("#Portugese");
const japaneseTile = document.querySelector("#Japanese");
const hindiTile = document.querySelector("#Hindi");

// Add the id of the input field so we can access it!
const inputField = document.querySelector("#guess");
console.log(inputField);
inputField.addEventListener("change",function(){
  const guess = inputField.value.toLowerCase();
  if(guess==="english"){
    englishTile.classList.remove("hidden");
  }else if(guess === "spanish"){
    spanishTile.classList.remove("hidden");
  }else if(guess === "chinese"){
    chineseTile.classList.remove("hidden");
  }else if(guess === "tagalog"){
    tagalogTile.classList.remove("hidden");
  }else if(guess === "vietnamese"){
    vietnameseTile.classList.remove("hidden");
  }else if(guess === "arabic"){
    arabicTile.classList.remove("hidden");
  }else if(guess === "french"){
    frenchTile.classList.remove("hidden");
  }else if(guess === "korean"){
    koreanTile.classList.remove("hidden");
  }else if(guess == "russian"){
    russianTile.classList.remove("hidden");
  }else if(guess === "portugese"){
    portugeseTile.classList.remove("hidden");
  }else if(guess === "japanese"){
    japaneseTile.classList.remove("hidden");
  }else if(guess === "hindi"){
    hindiTile.classList.remove("hidden");
  }
  inputField.value = "";
});

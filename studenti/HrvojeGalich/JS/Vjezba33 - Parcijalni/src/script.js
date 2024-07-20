import { fetchData } from "./data.js";
import { createElement } from "./render.js";

const inputElement = document.getElementById("search-term");
const ulElement = document.getElementById("songs-list");
const noSongsMsg = document.getElementById("noSongs");
const loadSpin = document.getElementById("loading-spinner");

var timeOut = null;

export default () => {
  const updateMusicList = (event) => {
    clearTimeout(timeOut);

    timeOut = setTimeout(async () => {
      while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
      }
      const inputElementValue = inputElement.value;

      if (inputElementValue) {
        // obriši nosongs
        noSongsMsg.style.display = "none";
        //prikaži loading spinner
        loadSpin.style.display = "block";
        // dohvati podatke
        var retData = [];
        retData = await fetchData(inputElementValue);
        // obriši loading spinner
        loadSpin.style.display = "none";
        // prikaži podatke
        if (retData.ulElement !== 0) {
          for (var i in retData) {
            if (retData[i].song && retData[i].artist) {
              const listItemElemnt = createElement(retData[i]);
              ulElement.appendChild(listItemElemnt);
            }
          }
        } else {
          noSongsMsg.style.display = "block";
        }
      } else {
        // prikaži nosongs
        noSongsMsg.style.display = "block";
      }
    }, 800);
  };
  inputElement.addEventListener("keyup", updateMusicList);
};

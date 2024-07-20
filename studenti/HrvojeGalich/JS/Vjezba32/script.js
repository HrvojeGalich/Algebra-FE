// custom css property --vh
//
if (isMobile()) {
  var vh = screen.availHeight;
} else {
  var vh = window.innerHeight;
}

document.documentElement.style.setProperty("--vh", `${vh}px`);
console.log(navigator.userAgent);

// Funkcija koja provjerava da li se browser ivršava na mobilnom uređaju
//
function isMobile() {
  const RegExp = /Mobi|Andoid|webOS|iPhone|Opera /i;
  return RegExp.test(navigator.userAgent);
}
// Deklaracija i incijalizacija globalnih varijabli
//
var olEl = document.getElementById("ol");
var formaEl = document.getElementById("forma");
var stInpEl = document.getElementById("stinp");
var kolInpEl = document.getElementById("kolinp");
var spremiAEl = document.getElementById("spremi");
var ucitajAEl = document.getElementById("ucitaj");
var spremiASmEl = document.getElementById("spremiSm");
var ucitajASmEl = document.getElementById("ucitajSm");

var stavke = [];
// Genira i vraća proizvolja niz znakova
//
function generirajID() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

// Funkcija koja prikazuje sve stavke
//
function prikaziStavke() {
  olEl.innerHTML = "";

  for (var i = 0; i < stavke.length; i++) {
    var newLiEl = document.createElement("li");
    var divEl = document.createElement("div");
    var btnEl = document.createElement("button");
    var pEl = document.createElement("p");

    const id = stavke[i].id;
    btnEl.addEventListener("click", () => {
      onDelSt(id);
    });

    pEl.innerText = `${stavke[i].naziv} ${stavke[i].kolicina} Kom`;
    btnEl.innerText = "Obriši";
    divEl.classList = "stavka";

    divEl.appendChild(pEl);
    divEl.appendChild(btnEl);
    newLiEl.appendChild(divEl);

    olEl.appendChild(newLiEl);
  }
}

// Funkcija koja briše stavku
//
function onDelSt(id) {
  const noveStavke = stavke.filter((stavka) => stavka.id !== id);
  stavke = noveStavke;

  prikaziStavke();
}

// Funkcija koja zapisuje stavke na backend
async function spremiStavke() {
  // Obriši sve podatake na FB
  try {
    await fetch(
      "https://algebra-fe2-default-rtdb.europe-west1.firebasedatabase.app/stavke.json",
      {
        method: "DELETE",
      }
    );
    stavke.forEach((stavka) => {
      zapisiStavku(stavka);
    });
  } catch (error) {
    alert(error);
  }
  alert("Podaci zapisani!");
}

// Funkcija koja zapisuje jednu stavku
async function zapisiStavku(stavka) {
  try {
    await fetch(
      "https://algebra-fe2-default-rtdb.europe-west1.firebasedatabase.app/stavke.json",
      {
        method: "POST",
        body: JSON.stringify(stavka),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    alert(error);
  }
}

// Funkcija koja ucitava stavke sa backend
async function ucitajStavke() {
  const tmpStavke = [];

  try {
    const response = await fetch(
      "https://algebra-fe2-default-rtdb.europe-west1.firebasedatabase.app/stavke.json",
      {
        method: "GET",
      }
    );
    const data = await response.json();

    for (let key in data) {
      tmpStavke.push({
        id: data[key].id,
        naziv: data[key].naziv,
        kolicina: data[key].kolicina,
      });
    }
  } catch (error) {
    alert(error);
  }

  stavke = tmpStavke;
  prikaziStavke();
}

// Funkcija koja procesir formu
//
function onSubmitForm(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const stavka = formData.get("st");
  const kolicina = formData.get("kol");

  stavke.push({
    id: generirajID(),
    naziv: stavka,
    kolicina: kolicina,
  });

  stInpEl.value = "";
  kolInpEl.value = 0;

  prikaziStavke();
}
// Funkcija koja otvara i zatvara menu
//
function toggleMenuIcon() {
  var smallMenuEl = document.getElementById("menu-small");
  var smallMenuDisplay = window.getComputedStyle(smallMenuEl).display;

  if (smallMenuDisplay === "block") {
    smallMenuEl.style.display = "none";
  } else {
    smallMenuEl.style.display = "block";
  }

  var iconEl = document.getElementById("icon");
  iconEl.classList.toggle("change");
}
// Event listener-i
//
formaEl.addEventListener("submit", onSubmitForm);
spremiAEl.addEventListener("click", spremiStavke);
ucitajAEl.addEventListener("click", ucitajStavke);
spremiASmEl.addEventListener("click", spremiStavke);
ucitajASmEl.addEventListener("click", ucitajStavke);

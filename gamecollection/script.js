
let games = [
  {
    tytul: "Roblox",
    platforma: "PC",
    gatunek: "MMO",
    rok: 2006,
    status: "W trakcie",
  },
  {
    tytul: "Minecraft",
    platforma: "PC",
    gatunek: "Sandbox",
    rok: 2009,
    status: "Do ogrania",
  },
  {
    tytul: "Pokemon: Sword and Shield",
    platforma: "Nintendo Switch",
    gatunek: "gatunek",
    rok: 2019,
    status: "W trakcie",
  },
  {
    tytul: "Zelda",
    platforma: "Famicon",
    gatunek: "gatunek",
    rok: 1986,
    status: "Do ogrania",
  },
  {
    tytul: "Nie wiem",
    platforma: "niewiem",
    gatunek: "niewiem",
    rok: 2000,
    status: "Ukończona",
  },
];

let collection = document.getElementById("collection");

function wyswietlGry() {
  collection.innerHTML = "";

  let szukanyTytul = document.getElementById("szukaj").value.toLowerCase();
  let wybranyStatus = document.getElementById("filtrStatusu").value;

  for (let i = 0; i < games.length; i++) {
    let game = games[i];

    let pasujeTytul = game.tytul.toLowerCase().includes(szukanyTytul);

    let pasujeStatus = wybranyStatus == "Wszystkie" || game.status == wybranyStatus;

    if (pasujeTytul && pasujeStatus) {

      let div = "<div>"
      + "<div>"
      + game.tytul
      + " (" + game.rok + ", " + game.platforma + ", " + game.gatunek + ", " + game.status + ")  "
      + "</div>"
      + "<div>"
      + '<button onclick="zmienStatus(' + i + ')">Zmień</button>'
      + '<button onclick="usunGre(' + i + ')">Usuń</button>'
      + "</div>"
      + "</div>";

      collection.innerHTML = collection.innerHTML + div;
    }
  }

  if (collection.innerHTML == "") {
    collection.innerHTML = "Nie znaleziono gier.";
  }

  podsumujKolekcje();
}

function zmienStatus(i) {
  console.log("zmienStatus: " + i);
  let game = games[i];

  if (game.status == "W trakcie") {
    game.status = "Ukończona";
  }
  else if (game.status == "Ukończona") {
    game.status = "Do ogrania";
  }
  else if (game.status == "Do ogrania") {
    game.status = "W trakcie";
  }

  wyswietlGry();
}

function usunGre(i) {
  console.log("usunGre: " + i);
  games.splice(i, 1);

  wyswietlGry();
}


function pokazWszystkie() {
  document.getElementById("szukaj").value = "";
  document.getElementById("filtrStatusu").value = "Wszystkie";

  wyswietlGry();
}



function podsumujKolekcje() {
  let wszystkie = games.length;
  let doOgrania = 0;
  let wTrakcie = 0;
  let ukonczone = 0;

  for (let i = 0; i < games.length; i++) {

    if (games[i].status == "Do ogrania") {
      doOgrania++;
    }
    else if (games[i].status == "W trakcie") {
      wTrakcie++;
    }
    else if (games[i].status == "Ukończona") {
      ukonczone++;
    }
  }

  document.getElementById("podsumowanie").innerHTML =
    "<div>Wszystkie gry: " + wszystkie + "</div>" +
    "<div>Do ogrania: " + doOgrania + "</div>" +
    "<div>W trakcie: " + wTrakcie + "</div>" +
    "<div>Ukończone: " + ukonczone + "</div>";
}





let form = document.getElementById("gameForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let newGame = {
    tytul: document.getElementById("tytul").value,
    platforma: document.getElementById("platforma").value,
    gatunek: document.getElementById("gatunek").value,
    rok: parseInt(document.getElementById("rok").value),
    status: document.getElementById("status").value
  };

  games.push(newGame);

  wyswietlGry();

  form.reset();
});

wyswietlGry();

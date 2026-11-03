let liczba1 = 0;
let liczba2 = 0;

let punkty = 0;
let pozostaloPytan = 3;

function losujDzialanie() {
    liczba1 = Math.floor(Math.random() * 10) + 1;
    liczba2 = Math.floor(Math.random() * 10) + 1;

    document.getElementById("dzialanie").innerHTML =
        liczba1 + " + " + liczba2;

    document.getElementById("odpowiedz").value = "";
    document.getElementById("informacja").innerHTML = "";
}

function sprawdzOdpowiedz() {
    let odpowiedz = Number(document.getElementById("odpowiedz").value);

    if (document.getElementById("odpowiedz").value === "") {
        document.getElementById("informacja").innerHTML =
            "Wpisz odpowiedź!";
        return;
    }

    if (odpowiedz === liczba1 + liczba2) {
        punkty++;
        document.getElementById("informacja").innerHTML =
            "Poprawna odpowiedź!";
    } else {
        document.getElementById("informacja").innerHTML =
            "Niestety, błędna odpowiedź!";
    }

    document.getElementById("punkty").innerHTML =
        "Punkty: " + punkty;

    pozostaloPytan--;

    if (pozostaloPytan == 0) {
        document.getElementById("pytanie").innerHTML =
            "Zostało pytań: " + pozostaloPytan ;
        koniecGry();
    } else {
        document.getElementById("pytanie").innerHTML =
            "Zostało pytań: " + pozostaloPytan ;

        losujDzialanie();
    }
}

function koniecGry() {
    document.getElementById("dzialanie").innerHTML = "Koniec gry!";
    document.getElementById("odpowiedz").disabled = true;
    document.getElementById("sprawdz").disabled = true;

    document.getElementById("wynik").innerHTML =
        "Twój wynik: " + punkty + " / 3 punktów";
}

function nowaGra() {
    punkty = 0;
    pozostaloPytan = 3;

    document.getElementById("punkty").innerHTML = "Punkty: 0";
    document.getElementById("pytanie").innerHTML = "Zostało pytań: " + pozostaloPytan;
    document.getElementById("wynik").innerHTML = "";

    document.getElementById("odpowiedz").disabled = false;
    document.getElementById("sprawdz").disabled = false;

    losujDzialanie();
}

// Uruchomienie gry
nowaGra();
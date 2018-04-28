/*
Calcul les nombres premiers
CodeAcadémie : Exercice du cours du 23/04/2018
A partir d'un tableau d'entiers, écrire des codes exploitant les différents mécanismes d'itération 
(while, for, for of, Array.forEach (cf. également Array.filter et Array.map)) pour dans un premier temps afficher 
les nombres premiers (console.log), puis dans un second temps produire un tableau dérivé ne contenant que ces nombres premiers.
Bonus : Le tableau des entiers peut-lui même être généré dynamiquement via une boucle.
Indice 1 :  Un nombre premier est un nombre divisible uniquement par 1 ou par lui-même.
            Ainsi, un nombre n est premier s'il n'est divisible par aucun des nombres premiers qui le précèdent.
Indice 2 :  Un nombre a est divisible par un nombre b si le reste de la division entière de a par b est égal à 0.
            Le reste d'une division entière s'obtient par l'opérateur % (modulo).
*/

function afficherConsole() {
  var message = "Hello Bertrand !";

  console.log(message);
}

/*
Affichage des nombres premiers avec la boucle while
*/
function primeNumberWhile() {
  var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  var i = 0;
  var isPrimeNumber = true;
  var j = 0;
  var list = document.getElementById("resultWhile");
  var result = "La listes des nombres premiers :";

  while (i < tab.length) {
    isPrimeNumber = true;
    j = 1;
    //TODEL console.log("-->" + tab[i]);
    while (j < i) {
      //TODEL console.log("---->" + tab[j]);
      //TODEL console.log("------>" + tab[i] % tab[j]);
      if (tab[i] % tab[j] === 0) {
        isPrimeNumber = false;
      }
      j++
    }
    if (isPrimeNumber) {
      console.log(tab[i] + " est un nombre premier !")
      result = result + '<li id="prime_number' + (i + 1) + '">' + tab[i] + '</li>'
    }
    i++;
  }

  // une fois la chaine crée on la rajoute à la page. C'est l'opération la plus coûteuse du script.
  list.innerHTML = result;
}

/*
Affichage des nombres premiers avec la boucle for
*/
function primeNumberFor() {
  var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  var i = 0;
  var isPrimeNumber = true;
  var j = 0;
  var list = document.getElementById("resultFor");
  var result = "La listes des nombres premiers :";

  for (i = 0; i < tab.length; i++) {
    isPrimeNumber = true;
    //TODEL console.log("-->" + tab[i]);
    for (j = 1; j < i; j++) {
      //TODEL console.log("---->" + tab[j]);
      //TODEL console.log("------>" + tab[i] % tab[j]);
      if (tab[i] % tab[j] === 0) {
        isPrimeNumber = false;
      }
    }
    if (isPrimeNumber) {
      console.log(tab[i] + " est un nombre premier !")
      result = result + '<li id="prime_number' + (i + 1) + '">' + tab[i] + '</li>'
    }
  }

  // une fois la chaine crée on la rajoute à la page. C'est l'opération la plus coûteuse du script.
  list.innerHTML = result;
}

/*
Affichage des nombres premiers avec la boucle for .. of
*/
function primeNumberForOf() {
  var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  var tabResult = [];
  var isPrimeNumber = true;
  var list = document.getElementById("resultForOf");
  var result = "La listes des nombres premiers :";

  for (let element of tab) {
    isPrimeNumber = true;
    for (let primeNumber of tabResult) {
      //TODEL console.log("---->" + element + "-" + primeNumber);
      //TODEL console.log("------>" + element % primeNumber);
      if ((element % primeNumber === 0) && (primeNumber !== 1)) {
        isPrimeNumber = false;
      }
      //TODEL console.log("------>" + isPrimeNumber);
    }
    if (isPrimeNumber) {
      console.log(element + " est un nombre premier !")
      tabResult.push(element);
      result = result + '<li id="prime_number' + primeNumber + '">' + primeNumber + '</li>'
      //TODEL result = result + '<li id="prime_number' + (i + 1) + '">' + tab[i] + '</li>'
    }
  }

  /*TODEL for (let primeNumber of tabResult) {
    result = result + '<li id="prime_number' + primeNumber + '">' + primeNumber + '</li>'
  }*/

  // une fois la chaine crée on la rajoute à la page. C'est l'opération la plus coûteuse du script.
  list.innerHTML = result;
}

/*
Affichage des nombres premiers avec la boucle Array.forEach
*/
function primeNumberArrayforEach() {
  var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  var tabResult = [];
  var isPrimeNumber = true;
  var list = document.getElementById("resultArrayforEach");
  var result = "La listes des nombres premiers :";

  tab.forEach(function(element) {
    isPrimeNumber = true;
    for (let primeNumber of tabResult) {
      if ((element % primeNumber === 0) && (primeNumber !== 1)) {
        isPrimeNumber = false;
      }
    }
    if (isPrimeNumber) {
      console.log(element + " est un nombre premier !")
      tabResult.push(element);
      result = result + '<li id="prime_number' + element + '">' + element + '</li>'
      //TODEL result = result + '<li id="prime_number' + (i + 1) + '">' + tab[i] + '</li>'
    }
  })

  /*TODEL for (let primeNumber of tabResult) {
    result = result + '<li id="prime_number' + primeNumber + '">' + primeNumber + '</li>'
  }*/

  // une fois la chaine crée on la rajoute à la page. C'est l'opération la plus coûteuse du script.
  list.innerHTML = result;
}

/*
Affichage des nombres premiers avec la boucle Array.filter
*/
function primeNumberArrayfilter() {
  var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  var tabResult = [];
  var isPrimeNumber = true;
  var list = document.getElementById("resultArrayfilter");
  var result = "La listes des nombres premiers :";

  tab.forEach(function(element) {
    isPrimeNumber = true;
    for (let primeNumber of tabResult) {
      if ((element % primeNumber === 0) && (primeNumber !== 1)) {
        isPrimeNumber = false;
      }
    }
    if (isPrimeNumber) {
      console.log(element + " est un nombre premier !")
      tabResult.push(element);
      result = result + '<li id="prime_number' + element + '">' + element + '</li>'
      //TODEL result = result + '<li id="prime_number' + (i + 1) + '">' + tab[i] + '</li>'
    }
  })

  /*TODEL for (let primeNumber of tabResult) {
    result = result + '<li id="prime_number' + primeNumber + '">' + primeNumber + '</li>'
  }*/

  // une fois la chaine crée on la rajoute à la page. C'est l'opération la plus coûteuse du script.
  list.innerHTML = result;
}

/*
Affichage des nombres premiers avec la boucle Array.map
*/
function primeNumberArraymap() {
  var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  var tabResult = [];
  var isPrimeNumber = true;
  var list = document.getElementById("resultArraymap");
  var result = "La listes des nombres premiers :";

  tab.forEach(function(element) {
    isPrimeNumber = true;
    for (let primeNumber of tabResult) {
      if ((element % primeNumber === 0) && (primeNumber !== 1)) {
        isPrimeNumber = false;
      }
    }
    if (isPrimeNumber) {
      console.log(element + " est un nombre premier !")
      tabResult.push(element);
      result = result + '<li id="prime_number' + element + '">' + element + '</li>'
      //TODEL result = result + '<li id="prime_number' + (i + 1) + '">' + tab[i] + '</li>'
    }
  })

  /*TODEL for (let primeNumber of tabResult) {
    result = result + '<li id="prime_number' + primeNumber + '">' + primeNumber + '</li>'
  }*/

  // une fois la chaine crée on la rajoute à la page. C'est l'opération la plus coûteuse du script.
  list.innerHTML = result;
}
/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const me = {
  name: 'Joh',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.skills.pop();
console.log(me);

/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */

let valore = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
  } else {
    valore.push(i);
  }
}
console.log(valore);

//OR METODO ALTERNATIVO

let valore = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {

    valore.push(i);
  }
}
console.log(valore);


/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

let valori = [];
for (let i = 0; i < 10; i++) {
  valori[i] = Math.floor(Math.random() * 101); //Math.floor(Math.random()*101) pesca numeri randomici interi. math.random pesca numeri casuali non arrotondati
}
console.log(valori);


/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

let valore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let numero of valore) {
  if (isPari(numero)) {
    console.log(numero);
  }
}
function isPari(i) {
  if (i % 2 === 0) {
    return true;
  } return false;
}


/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */

/*function createArray(num){
  let arrayNum = [];
  for (let i = 1; i <= num; i++) {
    arrayNum.push(Math.floor(Math.random()*101))
  }
  return arrayNum;
}

let somma = createArray(10);
console.log(somma);
let sommatoria = 0;
for (let variabile of somma) {
sommatoria = variabile + sommatoria;
 }

 
*/

let somma = [14, 2, 13, 40, 17, 22, 92, 58, 19, 10];
let sommatoria = 0;
for (let variabile of somma) {
  sommatoria = variabile + sommatoria;
}

/* ESERCIZIO 6
Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/

let random = [12, 54, 41, 32, 63, 77, 18];
console.log(random);
for (let i = 0; i < random.length; i++) {
  random[i] = random[i] + 1;
}

console.log(random);

/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/

function createArray(num) {
  let arrayNum = [];
  for (let i = 1; i <= num; i++) {
    arrayNum.push(Math.floor(Math.random() * 101))
  }
  return arrayNum;
}

function isPari(i) {
  if (i % 2 === 0) {
    return true;
  } return false;
}

let dispari = createArray(10);
console.log("array iniziale: " + dispari);
let unico = [];
for (let i = 0; i < 10; i++) {
  console.log("numero :" + dispari[i] + " in posizione " + i);
  if (isPari(dispari[i])) {
  } else {
    unico.push(dispari[i]);
  }
}

dispari = unico;

console.log(dispari);



/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

function createArray(num) {
  let arrayNum = [];
  while (arrayNum.length < num) {
    let numero = Math.floor(Math.random() * 11);
    if (arrayNum.length === 0) {
      arrayNum.push(numero);
    } else {
      let controllo = false;
      for (let i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] === numero) {
          controllo = true;
        }
      } if (controllo) {
        } else {
          arrayNum.push(numero);
        }
    }
  }
  return arrayNum;
}

console.log(createArray(10))



/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

  let stringa = ["EPICODE", "is", "great"];
  for (let i = 0; i < stringa.length; i++) {
    stringa[i] = stringa[i].length; 
  }
  
  console.log(stringa);

/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

let inversione = [1, 3, 5];
inversione.reverse();
console.log(inversione);


/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/

let alto = [1, 3, 5];
let piuAlto = Math.max(...alto);
console.log(piuAlto); */

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/

  let vecchio;
  for (let film = 0; film < movies.length; i++) {
    if (vecchio === undefined) {
      vecchio = film;
    } else {
      if (parseInt(film.Year) < parseInt(vecchio.Year)){
        
      }
    }
  }
/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/

let numero = 0;
for (let i = 0; i < movies.length; i++) {
  if (movies[i].Type === 'movie') {
    numero++;
  }
}

/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

let cinema = [];
for (let i = 0; i < movies.length; i++) {
   cinema.push(movies[i].Title)
}

console.log(cinema)

/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const currentMillenniumMovies = movies.filter(movie => {
  const year = movie.Year;
  return year >= 2000 && year <= 2099;
});


/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/

const id = 'tt0355702'
function codice(movies){
for (let i = 0; i < movies.length; i++){
  if (id === movies[i].imdbID) {
   return movies[i].Title;
  }
}
}

console.log(codice(movies))


/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

let calcolo = 0;
for (let film of movies) {
  calcolo += parseInt(film.Year)
}
console.log(calcolo)


/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/

const parola = "Avengers";
for (let film of movies){
  if (film.Title.includes(parola)){
    console.log(film.Title)
  }
}
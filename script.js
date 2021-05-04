/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

"use strict";

let numberOfFilms;
function start() {
  numberOfFilms = +prompt("How much?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How much?", "");
  }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  user_status: {},
};

function rememberMyFilms() {
  let N = 2; /*personalMovieDB.count;*/
  for (let i = 0; i < N; i++) {
    const a = prompt("Last vieved?", ""),
      b = prompt("Your mark?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

//rememberMyFilms();

function writeYourGenres() {
  // MY MOZG {
  //   for (let i = 0; i < 3; i++) {
  //     let a = prompt("Favorite genre? " + (i+1) + ".", "");
  //     personalMovieDB.genres[i] = (i+1) + "." + a;
  //   }
  // }

  // {
  //       for (let i = 1; i <= 3; i++) {
  //         let genre = prompt(`Favorite genre? ${i}`);
  //         personalMovieDB.genres[i-1] = genre;
  //       }
  //     }

  //short
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Favorite genre? ${i}`);
  }
}
writeYourGenres();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    personalMovieDB.user_status = "Regular";
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    personalMovieDB.user_status = "Big Fan";
  } else if (personalMovieDB.count >= 30) {
    personalMovieDB.user_status = "WOW! junkie";
  } else {
    console.log("Error");
  }
}

detectPersonalLevel();

function checkPrivat() {
  let boo = personalMovieDB.privat;
  if (boo === false) {
    console.log(personalMovieDB);
  } else {
    alert("DB showing denied");
  }
}
checkPrivat();

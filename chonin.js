// /* Задание на урок:

// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
// перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

// 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
// переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";


const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  user_status: {},
  start: function() {
    personalMovieDB.count = +prompt("How much?", "");
    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("How much?", "");
    }
  },

  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }

    console.log(personalMovieDB.privat);
  },
  checkPrivat: function () {
    let boo = personalMovieDB.privat;
    if (boo === false) {
      console.log(personalMovieDB);
    } else {
      alert("DB showing denied");
    }
  },
  rememberMyFilms: function () {
    let N = personalMovieDB.count;
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
  },
  // writeYourGenres: function () {
  //   for (let i = 1; i <= 3; i++) {
  //     personalMovieDB.genres[i - 1] = prompt(`Favorite genre? ${i}`, "");

  //     while (
  //       personalMovieDB.genres[i - 1] == "" ||
  //       personalMovieDB.genres[i - 1] == null
  //     ) {
  //       personalMovieDB.genres[i - 1] = prompt(`Favorite genre? ${i}`, "");
  //     }
  //   }
  // },

  // showGenres: function () {
  //   personalMovieDB.genres.forEach(function (item, i, personalMovieDB) {
  //     console.log(`${i}: ${item} inside array ${personalMovieDB.genres}`);
  //   });
  // },

  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Favorite genre? ${i}`);

      if (genre === "" || genre === null) {
        console.log("Wrong"); i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
        personalMovieDB.genres.forEach((item, i) => {
          console.log(`Favorite genre ${i + 1} is ${item}`);
        });
      },

  showGenres: function () {
    personalMovieDB.genres.forEach(function (item, i, personalMovieDB) {
      console.log(`${i}: ${item} inside array ${personalMovieDB.genres}`);
    });
  },


  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      personalMovieDB.user_status = "Regular";
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      personalMovieDB.user_status = "Big Fan";
    } else if (personalMovieDB.count >= 30) {
      personalMovieDB.user_status = "WOW! junkie";
    } else {
      console.log("Error");
    }
  },
  checkPrivat: function () {
    if (personalMovieDB.privat === false) {
      console.log(personalMovieDB);
    } else {
      alert("DB showing denied");
    }
  }
  
};

// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.writeYourGenres();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.checkPrivat();
// personalMovieDB.showGenres();

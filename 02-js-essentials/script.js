const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring
const book = getBook(1);
book;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

//before we do like this ,write for each element of array
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

//but after destructuring , write all in one line
// const [primaryGenre, secondaryGenre] = genres;
// console.log(primaryGenre, secondaryGenre);

//REST /SPREAD OPERATOR
// REST - rest operator is used for destructuring the rest of the elements into an array
const [primaryGenre, secondaryGenre, ...otherGenre] = genres;
console.log(primaryGenre, secondaryGenre, otherGenre);

//SPREAD- spread operator has same syntax as rest ,but it is used for update and spread the whole array or object with other values and overwridding the values
const newGenres = ["epic fantasy", ...genres];
newGenres;

const updateBook = { ...book, moviePublicationDate: "12-10-2023", pages: 1210 };
updateBook;

//ARROW FUNCTION -
const getYear = (str) => str.split("-")[0];
getYear;
// TEMPLATE LITERAL - it works like normal quotes but we can do javascript operation inside it using ${} inside this braces we can write our javascript code
const summary = `${title} book is written by ${author} and it has ${pages} pages and published on year ${getYear(
  publicationDate
)}`;
summary;

// TERNARY OPERATOR- it is operator which works exactly like a function it returns us something ,and its one line decision making operator;
const pagesRange = pages > 1000 ? "over a thousand" : " less than thousand";
pagesRange;

//NULLISH OPERATOR - ?? IN SHORT CIRCUITING
//AND OPERATOR - 1 AND 1 =1 ,1 AND 0 =0
// OR OPERATOR - 1 OR 1 =1, 1 OR 0 =1
//NULLISH OPERATOR HELPS IN SHORT CIRCUITING , IT ONLY CONSIDER NULL & UNDEFINED AS FALSY VALUES
//FALSY VALUES - O ,'',NULL ,UNDEFINED

const { reviews } = book;

// const totalReviews = (reviews) => {
//   let count = 0;
//   for (const review in reviews) {
//     count = reviews[review].reviewsCount + count;
//   }
//   return count;
// };
// using for of and Object.keys method
// const totalReviews = (reviews) => {
//   let count = 0;
//   for (const review of Object.keys(reviews)) {
//     count = reviews[review].reviewsCount + count;
//   }
//   return count;
// };

// const reviewsArr = Object.keys(reviews)
// reviewsArr

const reviewsArr = Object.values(reviews);
reviewsArr;

// const totalReviews = (reviews) => {
//   let count = 0;
//   for (const review of Object.values(reviews)) {
//     count = review.reviewsCount + count;
//   }
//   return count;
// };
// {
//   goodreads: {
//     rating: 4.52,
//     ratingsCount: 630994,
//     reviewsCount: 13417,
//   },
//   librarything: {
//     rating: 4.53,
//     ratingsCount: 47166,
//     reviewsCount: 452,
//   },
// }

// [["goodreads",{}],[]]
// const reviewsArr3 = Object.entries(reviews);
// reviewsArr3;

const totalReviews = (reviews) => {
  let count = 0;
  for (const [key, review] of Object.entries(reviews)) {
    count = review.reviewsCount + count;
  }
  return count;
};

console.log(totalReviews(reviews));

//FOR EACH METHOD - SIMPLY FOR ACCESING THE VALUES OF ARRAY
const arr = [1, 2, 3];
let sum = 0;
arr.forEach((el) => (sum = sum + el));
console.log(sum);

//MAP METHOD -

//REDUCE METHOD
const books = getBooks();
books;

const count = books.reduce((pe, book) => {
  return book.pages + pe;
}, 0);
count;

//SORT

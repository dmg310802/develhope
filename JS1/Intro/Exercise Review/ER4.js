let = arrayBooks = [
    {
        title:"HP3",
        author:"JK Rowling",
        year:"2000",
        genre:"Fiction",
    },
    {
        title:"Percy Jackson",
        author:"Rick Riordan",
        year:"2010",
        genre:"Science Fiction",
    },
    {
        title:"Fablehaven",
        author:"Brandon Mull",
        year:"2008",
        genre:"Fantasy",
    },
    {
        title:"The Alchemist",
        author:"Paulo Coelho",
        year:"1988",
        genre:"Science Fiction",
    },

]


function books2(arrayBooks){
    let arrayBooks2 = [];
    arrayBooks.forEach(book => {
        if (book.year>=2000 && book.genre === "Science Fiction") {
            arrayBooks2.unshift(`${book.title} by ${book.author}, Modern, SciFi`);
        } else {
            if (book.year>2000) {
                arrayBooks2.unshift(`${book.title} by ${book.author}, Modern`);
            } else {if (book.genre === "Science Fiction") {
                arrayBooks2.unshift(`${book.title} by ${book.author}, SciFI`);
        } else{
            arrayBooks2.unshift(`${book.title} by ${book.author}`);
        }
        }
    }
   
    return arrayBooks2;
}
    )
console.log(arrayBooks2);
};

books2(arrayBooks);

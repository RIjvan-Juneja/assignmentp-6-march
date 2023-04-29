// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized

// Original array of books
const books = [
    { title: "Book1", author: "author1", year: 2005 },
    { title: "Book2", author: "author2", year: 2015 },
    { title: "Book3", author: "author3", year: 2008 },
    { title: "Book4", author: "author4", year: 2012 },
    { title: "Book5", author: "author5", year: 2002 }
  ];
  
  // Function to filter out books published before 2010
  function filterBooks(book) {
    return book.year >= 2010;
  }
  
  // Function to capitalize author names
  function capitalizeAuthorName(book) {
    return {
      ...book,
      author: book.author.toUpperCase()
    };
  }
  
  // Use filter() to create a new array with books published after 2010
  const filteredBooks = books.filter(filterBooks);
  
  // Use map() to capitalize author names in the filteredBooks array
  const booksWithCapitalizedAuthor = filteredBooks.map(capitalizeAuthorName);
  
  // Display the original array of books
  console.log("Original array of books:");
  console.log(books);
  
  // Display the filtered array of books published after 2010
  console.log("Filtered array of books published after 2010:");
  console.log(filteredBooks);
  
  // Display the new array of books with capitalized author names
  console.log("New array of books with capitalized author names:");
  console.log(booksWithCapitalizedAuthor);
  
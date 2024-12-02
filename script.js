$(document).ready(function() {
    // Load the JSON file
    $.getJSON("books.json", function(data) {
        // (a) Display the title of the first book
        console.log("Title of the first book:", data[0].title);

        // (b) Display the author of the second book
        console.log("Author of the second book:", data[1].author);

        // (c) Display the genres of all books
        let genres = data.map(book => book.genres).flat();
        console.log("Genres of all books:", genres);
    });
});

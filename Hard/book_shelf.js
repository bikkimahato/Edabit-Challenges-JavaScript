// Book Shelf
// https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn

function Book(title, author) {
    this.title = title
    this.author = author
}

Book.prototype.getTitle = function () {
    return `Title: ${this.title}`
}

Book.prototype.getAuthor = function () {
    return `Author: ${this.author}`
}

const PP = new Book("Pride and Prejudice", "Jane Austen")
const H = new Book("Hamlet", "William Shakespeare")
const WP = new Book("War and Peace", "Leo Tolstoy")
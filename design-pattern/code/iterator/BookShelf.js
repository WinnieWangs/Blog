class BookShelf {
    constructor() {
        this.books = []
        this.last = 0
    }

    getBookAt(index) {
        return this.books[index]
    }

    appendBook(book) {
        this.books[this.last] = book
        this.last++
    }

    getLength() {
        return this.last
    }

    iterator() {
        return new BookShelfIterator(this)
    }
}
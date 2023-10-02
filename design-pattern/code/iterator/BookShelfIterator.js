class BookShelfIterator {
    constructor(bookShelf) {
        this.bookShelf = bookShelf
        this.index = 0
    }

    hasNext() {
        return this.index < this.bookShelf.getLength()
    }

    next() {
        if (this.hasNext()) {
            const book = this.bookShelf.getBookAt(this.index)

            this.index++

            return book
        }
    }
}
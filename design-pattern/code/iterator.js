class Book {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

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
            const book =  this.bookShelf.getBookAt(this.index)

            this.index++

            return book
        }
    }
}

const bookShelf = new BookShelf()

bookShelf.appendBook(new Book('War and Peace'))
bookShelf.appendBook(new Book('Pride and Prejudice'))
bookShelf.appendBook(new Book('The Great Gatsby'))
bookShelf.appendBook(new Book('Crime and Punishment'))

const it  = bookShelf.iterator()

while(it.hasNext()) {
    console.log(it.next())
}
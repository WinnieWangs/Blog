const bookShelf = new BookShelf()

bookShelf.appendBook(new Book('War and Peace'))
bookShelf.appendBook(new Book('Pride and Prejudice'))
bookShelf.appendBook(new Book('The Great Gatsby'))
bookShelf.appendBook(new Book('Crime and Punishment'))

const it = bookShelf.iterator()

while (it.hasNext()) {
    console.log(it.next())
}
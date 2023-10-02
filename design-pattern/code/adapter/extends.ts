abstract class Print {
    public printWeak() { }
    public printStrong() { }
}

class Banner {
    string: string
    constructor(string: string) {
        this.string = string
    }

    public showWithParen() {
        console.log(`(${this.string})`)
    }

    public showWithAster() {
        console.log(`${this.string} *`)
    }
}

class PrintBanner extends Banner implements Print {
    constructor(string: string) {
        super(string)
    }

    public printWeak() {
        this.showWithParen()
    }

    public printStrong() {
        this.showWithAster()
    }
}

const p = new PrintBanner('hello')

p.printWeak()
p.printStrong()
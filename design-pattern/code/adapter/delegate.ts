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

class PrintBanner extends Print {
    banner: Banner
    constructor(string: string) {
        super()
        this.banner = new Banner(string)
    }

    public printWeak() {
        this.banner.showWithParen()
    }

    public printStrong() {
        this.banner.showWithAster()
    }
}

const p = new PrintBanner('hello')

p.printWeak()
p.printStrong()
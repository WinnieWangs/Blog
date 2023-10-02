"use strict";
class Print {
    printWeak() { }
    printStrong() { }
}
class Banner {
    constructor(string) {
        this.string = string;
    }
    showWithParen() {
        console.log(`(${this.string})`);
    }
    showWithAster() {
        console.log(`${this.string} *`);
    }
}
class PrintBanner extends Print {
    constructor(string) {
        super();
        this.banner = new Banner(string);
    }
    printWeak() {
        this.banner.showWithParen();
    }
    printStrong() {
        this.banner.showWithAster();
    }
}
const p = new PrintBanner('hello');
p.printWeak();
p.printStrong();

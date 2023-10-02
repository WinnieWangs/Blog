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
class PrintBanner extends Banner {
    constructor(string) {
        super(string);
    }
    printWeak() {
        this.showWithParen();
    }
    printStrong() {
        this.showWithAster();
    }
}
const p = new PrintBanner('hello');
p.printWeak();
p.printStrong();

"use strict";
class AbstractDisplay {
    open() { }
    close() { }
    print() { }
    display() {
        this.open();
        for (let i = 0; i <= 5; i++) {
            this.print();
        }
        this.close();
    }
}
class CharDisplay extends AbstractDisplay {
    constructor(ch) {
        super();
        this.char = ch;
    }
    open() {
        console.log('<<');
    }
    close() {
        console.log('>>');
    }
    print() {
        console.log(this.char);
    }
}
class StringDisplay extends AbstractDisplay {
    constructor(str) {
        super();
        this.char = str;
    }
    open() {
        this.printLine();
    }
    close() {
        this.printLine();
    }
    print() {
        console.log(`|${this.char}|`);
    }
    printLine() {
        const l = this.char.length;
        let str = `+`;
        for (let i = 0; i < l; i++) {
            str += '-';
        }
        str += `+`;
        console.log(str);
    }
}
class Main {
    constructor() {
        const d1 = new CharDisplay('H');
        const d2 = new StringDisplay('hello world');
        const d3 = new StringDisplay('你好，世界');
        d1.display();
        d2.display();
        d3.display();
    }
}
new Main();

abstract class AbstractDisplay {
  public open() { }
  public close() { }
  public print() { }
  public display() {
    this.open()

    for (let i = 0; i <= 5; i++) {
      this.print()
    }

    this.close()
  }
}

class CharDisplay extends AbstractDisplay {
  private char: string

  constructor(ch: string) {
    super()
    this.char = ch
  }

  public open() {
    console.log('<<')
  }

  public close() {
    console.log('>>')
  }

  public print() {
    console.log(this.char)
  }
}

class StringDisplay extends AbstractDisplay {
  private char: string

  constructor(str: string) {
    super()

    this.char = str
  }

  public open() {
    this.printLine()
  }

  public close() {
    this.printLine()
  }

  public print() {
    console.log(`|${this.char}|`)
  }

  private printLine() {
    const l = this.char.length

    let str = `+`

    for (let i = 0; i < l; i++) {
      str += '-'
    }

    str += `+`

    console.log(str)
  }
}

class Main {
  constructor() {
    const d1: AbstractDisplay = new CharDisplay('H')
    const d2: AbstractDisplay = new StringDisplay('hello world')
    const d3: AbstractDisplay = new StringDisplay('你好，世界')

    d1.display()
    d2.display()
    d3.display()
  }
}

new Main()
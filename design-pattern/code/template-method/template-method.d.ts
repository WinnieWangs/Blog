declare abstract class AbstractDisplay {
    open(): void;
    close(): void;
    print(): void;
    display(): void;
}
declare class CharDisplay extends AbstractDisplay {
    private char;
    constructor(ch: string);
    open(): void;
    close(): void;
    print(): void;
}
declare class StringDisplay extends AbstractDisplay {
    private char;
    constructor(str: string);
    open(): void;
    close(): void;
    print(): void;
    private printLine;
}
declare class Main {
    constructor();
}

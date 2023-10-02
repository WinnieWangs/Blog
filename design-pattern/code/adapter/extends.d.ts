declare abstract class Print {
    printWeak(): void;
    printStrong(): void;
}
declare class Banner {
    string: string;
    constructor(string: string);
    showWithParen(): void;
    showWithAster(): void;
}
declare class PrintBanner extends Banner implements Print {
    constructor(string: string);
    printWeak(): void;
    printStrong(): void;
}
declare const p: PrintBanner;

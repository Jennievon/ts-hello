export class Point {
    constructor(private _x?: number, private _y?: number) {
    }

    get x() {
        return this._x
    }

    set x(value: number) {
        if (value < 0) {
            throw new Error("Error");
        }
        this._x = value;
    }

    draw() {
        console.log(`x: ${this._x}, y: ${this._y}`)
    };
}
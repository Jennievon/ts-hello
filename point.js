"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Error");
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Point.prototype.draw = function () {
        console.log("x: " + this._x + ", y: " + this._y);
    };
    ;
    return Point;
}());
exports.Point = Point;

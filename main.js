"use strict";
// function log(message) {
//     console.log(message)
// }
Object.defineProperty(exports, "__esModule", { value: true });
// var message = 'Hello World'
// log(message)
// function doStuff() {
//     for (var i = 0; i < 5; i++) {
//     console.log(i)
//     }
// console.log(`Finally: ${i}`);
// }
// doStuff()
// // DECLARING VARIABLES
// var a: number;
// var b: boolean;
// var c: string;
// var d: any;
// var e: number[] = [1, 2, 3];
// var f: any[] = [1, 'a', true];
// enum Color { Red = 0, Green = 1, Blue = 2 };
// var backgroundColor = Color.Red;
// console.log(backgroundColor);
// // TYPE ASSERTIONS
// var message;
// message = 'abc';
// var endsWithC = (<string>message).endsWith('c')
// var alternative = (message as string).endsWith('c')
// // ARROW FNS
// let doLog = (message) => console.log(message);
// // INTERFACES
// interface Point {
//     x: number,
//     y: number
// }
// var drawPoint = (point: Point) => {
//     console.log(point);
// }
// drawPoint({ x: 3, y: 2 })
// // CLASSES
// class Point {
//     x: number;
//     y: number;
//     draw() {
//         // ..
//     };
//     getDist(altpoint: Point) {
//         // ..
//     };
// }
// // OBJECTS
// class Point {
//     x: number;
//     y: number;
//     draw() {
//         console.log(`x: ${this.x}, y: ${this.y}`)
//     };
//     getDist(altpoint: Point) {
//         // ..
//     };
// }
// var point = new Point()
// point.x = 1;
// point.y = 2;
// point.draw()
// // CONSTRUCTORS
// class Point {
//     x: number;
//     y: number;
//     constructor(x?: number, y?: number) { // --the '?' makes the fields optional
//         this.x = x;
//         this.y = y;
//     }
//     draw() {
//         console.log(`x: ${this.x}, y: ${this.y}`)
//     };
// }
// var point = new Point(1, 2)
// var point = new Point()     // --because the fields, x and y have been made optional, it won't throw an error if you don't pass values for x and y,.
// point.draw()
// // ACCESS MODIFIERS - public, private, protected
// class Point {
//     private x: number;
//     private y: number;
//     draw() {
//         console.log(`x: ${this.x}, y: ${this.y}`)
//     };
// }
// var point = new Point(1, 2)
// point.x = 3 // --this will not work because x has been privated
// // ACCESS MODIFIERS IN CONSTRUCTOR PARAMETERS
// class Point {
//     constructor(private x?: number, private y?: number) {
//     }
//     draw() {
//         console.log(`x: ${this.x}, y: ${this.y}`)
//     };
// }
// var point = new Point(1, 2)
// point.draw()
// // PROPERTIES -- // you can access fields, regardless of the modifiers using the 'get' and 'set' properties
// class Point {
//     constructor(private _x?: number, private _y?: number) {
//     }
//     get x() {
//         return this._x
//     }
//     set x(value: number) {
//         if (value < 0) {
//             throw new Error("Error");
//         }
//         this._x = value;
//     }
//     draw() {
//         console.log(`x: ${this._x}, y: ${this._y}`)
//     };
// }
// var point = new Point(1, 2)
// let x = point.x;
// point.x = 10;
// point.draw();
// // MODULES
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
point.draw();

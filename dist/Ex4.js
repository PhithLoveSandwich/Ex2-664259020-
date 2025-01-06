"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = exports.Rectangle = exports.Circle = exports.Shape = void 0;
class Shape {
    constructor(color = "red", filled = true) {
        this.color = "red";
        this.filled = true;
        this.color = color;
        this.filled = filled;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    toString() {
        return `Shape[color=${this.color},filled=${this.filled}]`;
    }
}
exports.Shape = Shape;
class Circle extends Shape {
    constructor(radius, color = "red", filled = true) {
        super(color, filled);
        this.radius = 1.0;
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    toString() {
        return `Circle[${super.toString()},radius=${this.radius}]`;
    }
}
exports.Circle = Circle;
class Rectangle extends Shape {
    constructor(color = "red", filled = true, width = 1.0, length = 1.0) {
        super(color, filled);
        this.width = 1.0;
        this.length = 1.0;
        this.width = width;
        this.length = length;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getLength() {
        return this.length;
    }
    setLength(length) {
        this.length = length;
    }
    getArea() {
        return this.width * this.length;
    }
    getPerimeter() {
        return 2 * (this.width + this.length);
    }
    toString() {
        return `Rectangle[${super.toString()},width=${this.width},length=${this.length}]`;
    }
}
exports.Rectangle = Rectangle;
class Square extends Rectangle {
    constructor(color = "red", filled = true, side = 1.0) {
        super(color, filled, side, side); // Single side argument
    }
    getSide() {
        return this.getLength();
    }
    setSide(side) {
        this.setLength(side);
        this.setWidth(side);
    }
    setWidth(side) {
        super.setWidth(side);
    }
    setLength(side) {
        super.setLength(side);
    }
    toString() {
        return `Square[${super.toString()}]`;
    }
}
exports.Square = Square;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(data) {
        this.id = data.id;
        this.model = data.model;
        this.year = data.year;
        this.color = data.color;
        this.buyValue = data.buyValue;
        this.doorsQty = data.doorsQty;
        this.seatsQty = data.seatsQty;
        this.status = data.status || false;
    }
}
exports.default = Car;

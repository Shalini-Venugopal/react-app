'use strict';

var add = function add(a, b) {
    return a + b;
};
console.log(add(50, 1));

var user = {
    name: 'Shalini',
    cities: ['Komarapalayam', 'Chennai'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    numbers: [5, 10, 15],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());

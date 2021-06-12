var Rectangle = /** @class */ (function () {
    function Rectangle(a, b) {
        this.length = a;
        this.breadth = b;
    }
    // member functions
    Rectangle.prototype.area = function () {
        return this.length * this.breadth;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.length + this.breadth);
    };
    return Rectangle;
}());
var rect = new Rectangle(3, 45);
// rect.length = 3;
// rect.breadth = 45;
console.log(rect.area(), rect.perimeter());

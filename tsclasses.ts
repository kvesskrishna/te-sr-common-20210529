import { CheckShape } from "./tsinterface";

class Rectangle implements CheckShape {
  // data members
  length: number;
  breadth: number;

  constructor(a, b) {
    this.length = a;
    this.breadth = b;
  }
  checkShape() {
    if (this.length === this.breadth) return "Square";
    else return "Rectangle";
  }

  // member functions
  area(): number {
    return this.length * this.breadth;
  }
  perimeter(): number {
    return 2 * (this.length + this.breadth);
  }
}

const rect = new Rectangle(3, 45);
// rect.length = 3;
// rect.breadth = 45;
console.log(rect.area(), rect.perimeter());

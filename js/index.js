/* 
1. Инкапсуляция + 
2. Наследование + 
3. Полиморфизм +
*/

class Figure {
  constructor(name) {
    this._name = name;
  }
  getArea() {}
}

/* Circle: radius, getArea() */

class Circle extends Figure {
  constructor(radius) {
    super('Circle');
    this._radius = radius;
  }
  getArea() {
    return Math.PI * this._radius * this._radius;
  }
}

class Triangle extends Figure {
  constructor(a, b, angle) {
    super('Triangle');
    this._a = a;
    this._b = b;
    this._angle = angle;
  }
  getArea() {
    return this._a * this._b * Math.sin(this._angle * (180 / Math.PI));
  }
}

class Square extends Figure {
  constructor(a) {
    super('Square');
    this._a = a;
  }
  getArea() {
    return this._a * this._a;
  }
}

const t = new Triangle(5, 7, 45);
const s = new Square(6);
const c = new Circle(10);
/**
 *
 * @param {Figure} figure
 */
function getFigureArea(figure) {
  if (figure instanceof Figure) {
    return figure.getArea(); // <- У любой фигуры будет вот такой интерфейс
  }
  throw new TypeError('Не поддерживаемый интерфейс');
}

// const Shapes = require("./shapes");
const { Circle, Triangle, Square } = require("./shapes");

// this will test the Triangle class constructor, shape input, the setColor function, and the render function
describe("Shapes", () => {
  test("Triangle - testing if a triangle is created with user input of blue", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150,50 250,150 50,150" fill="blue"/>'
    );
  });
});

// this will test the Square class constructor, shape input, the setColor function, and the render function
describe("Shapes", () => {
  test("Square - testing if a square is created with user input of yellow", () => {
    const shape = new Square();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      '<rect x="100" y="50" width="100" height="100" fill="yellow"/>'
    );
  });
});

// this will test the Circle class constructor, shape input, the setColor function, and the render function
describe("Shapes", () => {
  test("Circle - testing if a circle is created with user input of green", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="50" fill="green"/>'
    );
  });
});

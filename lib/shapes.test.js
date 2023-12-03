const Shapes = require("./shapes");

describe("Shapes", () => {
  test("Triangle - testing if a triangle is created with user input of blue", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

describe("Shapes", () => {
    test("Square - testing if a square is created with user input of yellow", () => {
      const shape = new Square();
      shape.setColor("yellow");
      expect(shape.render()).toEqual(
        '<rect width="30" height="30" fill="yellow"/>' //I need to make sure this is correct, from MDN
      );
    });
  });

  describe("Shapes", () => {
    test("Circle - testing if a circle is created with user input of green", () => {
      const shape = new Circle();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<circle cx="25" cy="75" r="20" fill="green"/>' //I need to make sure this is correct, from MDN
      );
    });
  });
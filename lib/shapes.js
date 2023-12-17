// Shapes will be the superclass/parent class and the shapes will be the subclass/children classes that will inherant from Shapes. This class has a constructor that takes in the color paramater for creating the shape and the function called setColor()
class Shape {
    constructor () {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
};

// Circle will return '<circle cx="25" cy="75" r="20" fill="{specified color}"/>' to the logo.svg file. This creates a circle with the specified color.
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}"/>`
    }
};

// Triangle will return '<polygon points="150, 18 244, 182 56, 182" fill="{specified color}" />' to the logo.svg file. This creates a triangle with the specified color.
class Triangle extends Shape {
    render() {
        return `<polygon points="150,50 250,150 50,150" fill="${this.color}"/>`
    }
};

// Square will return '<rect width="30" height="30" fill="{specified color}"/>' to the logo.svg file. This creates a square with the specified color.
class Square extends Shape {
    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}"/>`
    }
};

// exporting the Cirlce, Triangle, and Square classes
module.exports = { Circle, Triangle, Square };

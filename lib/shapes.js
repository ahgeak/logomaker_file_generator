
// Shapes will be the super/parent class and the shapes will be the base/children classes that will inherant from Shapes
class Shape {
    constructor () {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
};

//'<circle cx="25" cy="75" r="20" fill="green"/>'
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}"/>`
    }
};

//'<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
class Triangle extends Shape {
    render() {
        return `<polygon points="150,50 250,150 50,150" fill="${this.color}"/>`
    }
};

// '<rect width="30" height="30" fill="yellow"/>' 
class Square extends Shape {
    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}"/>`
    }
};

module.exports = { Circle, Triangle, Square };
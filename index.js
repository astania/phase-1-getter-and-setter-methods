// Add your Circle class here

class Circle {

    constructor(radius) {
        this.radius = radius
    }
    //getters
    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return Math.PI * this.diameter
    }

    get area() {
        return Math.PI * (this.radius * this.radius)
    }

    //setters
    set diameter(newDiameter) {
        this.radius = newDiameter / 2
    }

    set circumference(newCircumference) {
        this.radius = (newCircumference / Math.PI) / 2
    }

    set area(newArea) {
        this.radius = Math.sqrt(newArea / Math.PI)
    }
}


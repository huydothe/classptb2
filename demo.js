class QuadraticEquation {
    a;
    b;
    c;

    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.delta
    }

    geta = () => this.a;
    getb = () => this.b;
    getc = () => this.c;
    getDiscriminant = () => {
        this.delta = Math.pow(this.b, 2) - 4 * this.a * this.b;
        return this.delta;
    }
    getRoot1 = () => {
        if (this.delta > 0) {
            return (-this.b + Math.pow(this.delta, 0.5))/(2*this.a);
        }else if (this.delta === 0) {
            return (-this.b/(2*this.a));
        }else {
            return `The equation has no roots!`;
        }
    }
    getRoot2 = () => {
        if (this.delta > 0) {
            return (-this.b - Math.pow(this.delta, 0.5))/(2*this.a);
        }else if (this.delta === 0){
            return (-this.b/(2*this.a));
        }else {
            return `The equation has no roots!`;
        }
    }
}

let quaraticequation = new QuadraticEquation(1,4,4);
console.log(quaraticequation.getDiscriminant());
console.log(quaraticequation.getRoot1());
console.log(quaraticequation.getRoot2());


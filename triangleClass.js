class Triangle {
	constructor(lenA,lenB,lenC) {
		this.sideA = lenA;
		this.sideB = lenB;
		this.sideC = lenC;
		this.perim = this.sideA + this.sideB + this.sideC
		this.p =  this.perim / 2
	}

	getArea(){
		return Math.sqrt(this.p * (this.p - this.sideA) * (this.p - this.sideB) * (this.p - this.sideC))
	}
}

class eqTriangle extends Triangle {
	constructor(sideLength) {
		super(sideLength,sideLength,sideLength);
		
	}
}

var tri = new Triangle(30,18,24);
var eqTri = new eqTriangle(20);
console.log(eqTri.getArea());

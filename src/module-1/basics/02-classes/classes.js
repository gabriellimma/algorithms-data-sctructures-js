class dog {
	constructor(name, height, color) {
		this.name = name;
		this.height = height;
		this.color = color;
	}
	getName = () => this.name;
	getHeigth = () => this.height;
	getColor = () => this.color;
	setName = newName => this.name = newName;
	setHeight = newHeigth => this.height = newHeigth;
	setColor = newColor => this.color = newColor;
}

module.exports = {
	dog
}
//ES5

function Animal(type) {
  this.type = type;
  var color;
  this.getColor = function getColor() {
    return this.color;
  }
}

function Fish(fishType) {
  var fishType;
  this.getFishType = function getFishType() {
    return this.fishType;
  }
}

function Dog() {
  var dogType;
  this.getDogType = function getDogType() {
    return this.dogType;
  }
}

function DogType(typeName) {
  this.typeName = typeName;
  var furColor;
  this.getFurColor = function getFurColor() {
    return this.dogType;
  }
}

Dog.prototype = Object.create(Animal.prototype);
var dog = new Dog();
dog.getColor = "aaaaa"
dog.type = "test";
dog.getDogType = "dog";
console.log(dog.type, dog.getDogType, dog.getColor);
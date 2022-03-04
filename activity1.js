function Vehical(speed, color) {
  this.speed = speed;
  this.color = color;
}
Vehical.prototype.setSpeed = function () {
  return "Speed of the car is " + this.speed + ", " + this.color;
};
Vehical.prototype.drive = function () {
  console.log("You can drive Safely.At This speed");
};
function Car(milage, speed, color) {
  this.milage = milage;
  // return "Milage of the car is"+this.milage;
  Vehical.call(this, speed, color);
  return "Milage of the car is" + this.milage;
}
Car.prototype = Object.create(Vehical.prototype);

Car.prototype.drive = function () {
  console.log("Go Slowly");
};
var v1 = new Vehical();

// c1.drive();
v1.drive();

function Vehical(vspeed, vcolor) {
  (this.speed = vspeed), (this.color = vcolor);
}
Vehical.prototype.setSpeed = function () {
  console.log(this.speed + " is the speed of the car and ");
};
function Car(milage) {
  Vehical.call(this, vspeed, vcolor);

  this.milage = milage;
}

Car.prototype.setSpeed = function () {
  console.log(this.milage);
};

Car.prototype = new Vehical();
Car.prototype.constructor = Car;
var car = new Car("Ferrari", "Red", "8.8 Km/l.");
manager.setSpeed();

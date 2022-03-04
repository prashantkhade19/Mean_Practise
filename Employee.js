function Employee(fname, lname) {
  (this.firstname = fname), (this.lastname = lname);
}

Employee.prototype.display = function () {
  console.log(this.firstname + " " + this.lastname);
};

function Manager(fname, lname, dept) {
  Employee.call(this, fname, lname);

  this.dept = dept;
}

Manager.prototype.displayDept = function () {
  console.log(this.dept);
};

Manager.prototype = new Employee();

Manager.prototype.constructor = Manager;

var manager = new Manager("King", "Steves", "HR");

manager.display();

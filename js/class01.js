const out = str => console.log(str);
out("jeg er class");

const num = [1,2,3];
const num2 = num.map(n => n*2);
out(num2);

const Person = function(fName, birthYear) {
  this.firstName = fName;
  this.birthYear = birthYear;
  this.calcAge = function () {return 2022 - this.birthYear;};
};
let pers = new Person("Kurt", "1981");
out(pers);

let pers2 = new Person("Viggo", "1971");
out(pers2);

out(pers instanceof Person);

out(pers.firstName + " er " + pers.calcAge());

out(Person.prototype);

Person.prototype.calcAge2 = function () {out(2021 - this.birthYear)};

pers2.calcAge2();
out(Person.prototype);




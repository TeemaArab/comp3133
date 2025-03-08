"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    };
    Customer.prototype.GetAge = function () {
        console.log("Age: ".concat(this.age));
        return this.age;
    };
    return Customer;
}());
exports.Customer = Customer;
var customer = new Customer("Fatima", "Arab", 41);
customer.greeter();
customer.GetAge();

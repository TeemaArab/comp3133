var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    };
    return Customer;
}());
var customer = new Customer();
customer.firstName = "Fatima";
customer.lastName = "Arab";
customer.greeter();

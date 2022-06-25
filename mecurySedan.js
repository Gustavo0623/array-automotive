//this includes the vehicle class as a module
const VehicleModule = require('./vehicle').Vehicle

// added code given class instructions
class Car extends VehicleModule{

    // properties
    constructor(make, model, year, color, milage){
        super(make, model, year, color, milage);
        this.make= make;
        this.model= model;
        this.year= year;
        this.color= color;
        this.milage= milage;
        this.maximumPassengers= 5;
        this.passengers= 0;
        this.numberOfWheels= 4;
        this.maximumSpeed= 160;
        this.fuel= 10;
        this.scheduleService= false;
    }

    //methods
    loadPassenger(num){
        if(this.passengers < this.maximumPassengers){
            if((num + this.passengers) <= this.maximumPassengers){
                this.passenger = num;
                return this.passengers;
            } else {
                console.log(`${this.model} ${this.make} does not have enoough room to take all of the passengers!`);
            }
        } else {
            console.log(`${this.model} ${this.make} is Full!`);
        }
    }
    start(){
        if (this.fuel > 0){
            return this.started == true;
            console.log('The engine has started.');
        } else {
            return this.started == false;
            console.log('Oh No! This car is out of fuel!');
        }
    }
    serviceCheck(milage){
        if(this.milage > 30000){
            this.scheduleService == true;
            return this.scheduleService;
        } 
    }
}

//variable for new car
let myCar = new Car('mercury', 'sedan', '2002', 'white', 50000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.serviceCheck()

console.log(myCar)

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


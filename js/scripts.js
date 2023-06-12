// Business Logic for Places ---------
function Places() {
    this.destinations = {};
    this.currentId = 0;
}

Places.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
};

// Business Logic for destinations ---------
function Destination(country, city, timeOfYear, notes) {
    this.country = country;
    this.city = city;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
}

Destination.prototype.countryCity = function() {
    return this.country + " " + this.city;
};

Places.prototype.addDestination = function(destination) {
    destination.id = this.assignId();
    this.destinations[destination.id] = destination;
};

Places.prototype.findDestination = function(id) {
    if (this.destinations[id] !== undefined) {
        return this.destinations[id];
    }
    return false;
};

Places.prototype.deleteDestination = function(id) {
    if (this.destinations[id] === undefined) {
        return false;
    }
    delete this.destinations[id];
    return true;
};

let places = new Places();
let amsterdam = new Destination("Netherlands", "Amsterdam", "Spring", "I want to go to the Anne Frank house.");
let puertoVallerta = new Destination("Mexico", "Puerto Vallarta", "US Winter", "I want to go to the beach.");

places.addDestination(amsterdam);
places.addDestination(puertoVallerta);

// console.log(places);
// console.log(places.deleteDestination(1));
// console.log(places.destinations);
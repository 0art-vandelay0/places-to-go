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

// Destination.prototype.countryCity = function() {
//     return this.country + " " + this.city;
// };

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
let amsterdam = new Destination("Netherlands", "Amsterdam", "Spring", "Visit the Anne Frank house.");
let puertoVallerta = new Destination("Mexico", "Puerto Vallarta", "US Winter", "Go to the beach.");

places.addDestination(amsterdam);
places.addDestination(puertoVallerta);


// UI Logic
window.addEventListener("load", function() {
    document.querySelector("#destinationForm").onsubmit = function(event) {
        event.preventDefault();
        let country = document.getElementById("countryInput").value;
        let city = document.getElementById("cityInput").value;
        let timeOfYear = document.getElementById("timeOfYearInput").value;
        let notes = document.getElementById("notesInput").value;

        let destination = new Destination(country, city, timeOfYear, notes);

        places.addDestination(destination);

        // document.getElementById('destinationForm').reset();

        let countryResult = places.destinations[destination.id].country;
        let cityResult = places.destinations[destination.id].city;
        let timeOfYearResult = places.destinations[destination.id].timeOfYear;
        let notesResult = places.destinations[destination.id].notes;

        document.getElementById("country").innerText = countryResult;
        document.getElementById("city").innerText = cityResult;
        document.getElementById("timeOfYear").innerText = timeOfYearResult;
        document.getElementById("notes").innerText = notesResult;

        // document.getElementById("resultTest").innerText = places
        console.log(places.destinations);
        document.getElementById("resultTest").innerText = places.destinations[destination.id].country;

        document.getElementById("destinations").removeAttribute("class");
    }
});
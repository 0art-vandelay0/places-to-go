// Business Logic for Places ---------
function Places() {
    this.destinations = [];
}

// Business Logic for destinations ---------
function Destination(country, city, timeOfYear, notes) {
    this.country = country;
    this.city = city;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
}

Places.prototype.addDestination = function(destination) {
    this.destinations.push(destination);
};

let places = new Places();


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

        let destinationsOutput = document.getElementById("destinationsOutput");
        let listItem = document.createElement("li");
        listItem.innerHTML = "Country: " + destination.country + "<br>City: " + destination.city + "<br>Time of Year: " + destination.timeOfYear + "<br>Notes: " + destination.notes +"<br>";
        destinationsOutput.append(listItem);

        document.getElementById('destinationForm').reset();
        document.getElementById("destinations").removeAttribute("class");
    };
});

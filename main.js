document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("buyPlaneTicketsLink")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("content").innerHTML =
        '<h2>Buy Plane Tickets</h2><form id="planeTicketsForm"><div class="form-group"><label for="departure">Departure:</label><input type="text" class="form-control" id="departure" placeholder="Enter departure"></div><div class="form-group"><label for="destination">Destination:</label><input type="text" class="form-control" id="destination" placeholder="Enter destination"></div><button type="submit" class="btn btn-primary">Search</button></form><br><table class="table"><!-- Table will be populated here --></table>';
    });
  document
    .getElementById("productsLink")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("content").innerHTML =
        '<h2>Products</h2><table class="table"><!-- Table will be populated here --></table>';
      fetchProductsData();
    });
  document.addEventListener("submit", function (e) {
    if (e.target && e.target.id === "planeTicketsForm") {
      e.preventDefault();
      var departure = document.getElementById("departure").value;
      var destination = document.getElementById("destination").value;
      fetchPlaneTicketsData(departure, destination);
    }
  });
});
function fetchPlaneTicketsData(departure, destination) {
  var apiUrl =
    "https://jsonplaceholder.typicode.com/users?departure=" +
    departure +
    "&destination=" +
    destination;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      var tableContent = "";
      data.forEach(function (ticket) {
        tableContent +=
          "<tr><td>" +
          ticket.id +
          "</td><td>" +
          ticket.name +
          "</td><td>" +
          ticket.email +
          "</td><td>" +
          ticket.username +
          "</td></tr>";
      });
      document.querySelector("table").innerHTML = tableContent;
    })
    .catch((error) => console.error("Error fetching data:", error));
}
function fetchProductsData() {
  var apiUrl = "https://jsonplaceholder.typicode.com/users";
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      var tableContent = "";
      data.forEach(function (product) {
        tableContent +=
          "<tr><td>" + product.id + "</td><td>" + product.name + "</td></tr>";
      });
      document.querySelector("table").innerHTML = tableContent;
    })
    .catch((error) => console.error("Error fetching data:", error));
}

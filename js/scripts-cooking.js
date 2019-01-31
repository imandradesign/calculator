var convertGallonsToLiters = function(gallons) {
  return gallons * 3.785
}

var gallons = parseInt(prompt("How many gallons would you like to convert to liters?"))
var output = alert("There are " + convertGallonsToLiters(gallons) + " liters in " + gallons + " gallons.")

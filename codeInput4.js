let baseFee = .26;
let cities = ["Chennai", "Delhi", "Mumbai","Kolkata", "Bangalore" ];
let uberRates = [7, 14, 21, 28, 35];

let customerName = "Haris";
let customerCity = "Chennai"; 

console.log("Hi", customerName+ ", WELCOME TO UBER")

function getRate(customerCity) {
    function uberRate(customerCity, index) {
    let finalRate = (uberRates[index]) * baseFee;
    return finalRate;
  }
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
  console.log("The Uber rate at " +customerCity+ " is " +uberRate(customerCity, cities.indexOf(customerCity)))
}
//call the getRate function passing in the customerCity arugment
getRate(customerCity)
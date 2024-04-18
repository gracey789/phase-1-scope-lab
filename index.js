// write your code here!!
// Variable declarations
var customerName = 'bob'; // Stores the name of the customer
const leastFavoriteCustomer = 'some initial value'; // Stores the least favorite customer name (constant)

// Function to convert customerName to uppercase
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Converts customerName to uppercase
  
  // There's no return statement here, directly modifies customerName
}

// Function to set the best customer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Sets the global variable bestCustomer
}

// Function to overwrite the best customer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Modifies the global variable bestCustomer
}

// Function to change the least favorite customer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'billy'; // Attempt to modify the leastFavoriteCustomer (will result in an error because it's a constant)
}

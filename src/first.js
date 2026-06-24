console.log("Hello, World!");

// Print name age and logged-in (boolean)
const name = "Joy";
const age = 25;
const loggedIn = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Logged In:", loggedIn);

//Create variables for username and password
const username = "Allice";
const password = "password123";

console.log("Username:", username);
console.log("Password:", password);

//Create login credentials and compare using === and !==
const username = "Joy";
const password = "12345";

const enteredUsername = "Joy";
const enteredPassword = "12345";

// Compare username
console.log(username === enteredUsername); // true

// Compare password
console.log(password === enteredPassword); // true

// Check if username is different
console.log(username !== enteredUsername); // false

// Check if password is different
console.log(password !== enteredPassword); // false


//Write login validation: correct → “Login Success”, incorrect → “Invalid Credentials”
if (username === enteredUsername && password === enteredPassword) {
    console.log("Login Success");
} else {
    console.log("Invalid Credentials");
}

//Test with incorrect credentials
const wrongUsername = "Alice";
const wrongPassword = "wrongpassword";

if (username === wrongUsername && password === wrongPassword) {
    console.log("Login Success");
} else {
    console.log("Invalid Credentials");
}

//Create product array and print all items using loop
const products = ["Laptop", "Mobile", "Tablet", "Headphones"];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

//Create login function with parameters; return success/failure
function login(username, password, enteredUsername, enteredPassword) {
    if (username === enteredUsername && password === enteredPassword) {
        return "Success";
    } else {
        return "Failure";
    }
}

// Test cases
console.log(login("joy", "12345", "joy", "12345")); // Success
console.log(login("joy", "12345", "joy", "wrong"));  // Failure


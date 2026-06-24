//Write login validation: correct → “Login Success”, incorrect → “Invalid Credentials”

const username = "Joy";
const password = "12345";

const enteredUsername = "Joy";
const enteredPassword = "12345";

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
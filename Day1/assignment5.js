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

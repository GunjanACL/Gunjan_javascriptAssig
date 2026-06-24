//Modify login function to throw error and handle it
function login(username, password, enteredUsername, enteredPassword) {
  if (username === enteredUsername && password === enteredPassword) {
    return "Login Success";
  } else {
    throw new Error("Invalid Credentials");
  }
}

//Handle error with try/catch
try {
  const result = login("Alice", "12345", "Alice", "IncorrectPassword");
  console.log(result);
} catch (error) {
  console.log("Error:", error.message);
}
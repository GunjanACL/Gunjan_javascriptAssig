//Create login module

function login(username, password, enteredUsername, enteredPassword) {
  if (username === enteredUsername && password === enteredPassword) {
    return "Login Success";
  } else {
    throw new Error("Invalid Credentials");
  }
}

// export function
module.exports = login;
//Create reusable login module and import it
const login = require("./login");

try {
  //const result = login("joy", "12345", "1", "12345");
  const result = login("joy", "12345", "joy", "12345");
  console.log(result);
} catch (error) {
  console.log("Error:", error.message);
}
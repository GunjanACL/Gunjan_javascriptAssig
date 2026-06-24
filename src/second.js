//Write async function that returns product list using Promise

function getProducts() {
  return new Promise((resolve, reject) => {
    const products = [
      { id: 1, name: "MacBook", price: 50000 },
      { id: 2, name: "Tablet", price: 20000 },
      { id: 3, name: "iPad", price: 15000 }
    ];

    // simulate async delay
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
}

// async/await
async function showProducts() {
  const products = await getProducts();

  console.log("Product List:");
  products.forEach(p => {
    console.log(p.id, p.name, p.price);
  });
}

showProducts();


// //Modify login function to throw error and handle it
// function login(username, password, enteredUsername, enteredPassword) {
//   if (username === enteredUsername && password === enteredPassword) {
//     return "Login Success";
//   } else {
//     throw new Error("Invalid Credentials");
//   }
// }

// //Handle error with try/catch
// try {
//   const result = login("Alice", "12345", "Alice", "IncorrectPassword");
//   console.log(result);
// } catch (error) {
//   console.log("Error:", error.message);
// }

//Create reusable login module and import it
// const login = require("./login");

// try {
//   const result = login("joy", "12345", "joy", "12345");
//   console.log(result);
// } catch (error) {
//   console.log("Error:", error.message);
// }

// //Read product data from JSON and display
// const fs = require("fs");

// fs.readFile("products.json", "utf8", (err, data) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }

//   const products = JSON.parse(data);

//   products.forEach(product => {
//     console.log(product.id, product.name, product.price);
//   });
// });


// //Filter products with price < 50 and print result
// const products = [
//   { id: 1, name: "Pen", price: 10 },
//   { id: 2, name: "Notebook", price: 60 },
//   { id: 3, name: "Pencil", price: 20 },
//   { id: 4, name: "Bag", price: 100 }
// ];

// const filteredProducts = products.filter(product => product.price < 50);

// console.log("Products with price < 50:");

// filteredProducts.forEach(product => {
//   console.log(product.id, product.name, product.price);
// });
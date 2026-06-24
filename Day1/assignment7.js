// Create: - Login function - Product list - Add-to-cart function
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Tablet", price: 15000 }
];

//Login function
function login(username, password, enteredUsername, enteredPassword) {
  if (username === enteredUsername && password === enteredPassword) {
    return true; 
  }
  return false; 
}

//Cart array
const cart = [];

//Add-to-cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  if (product) {
    cart.push(product);
    console.log(product.name + " added to cart");
  } else {
    console.log("Product not found");
  }
}

// Step 1: Login
const isLoggedIn = login("Joy", "12345", "Joy", "12345");

if (isLoggedIn) {
  console.log("Login Success");

  // Step 2: Show products
  console.log("Products:");
  for (let p of products) {
    console.log(p.id, p.name, p.price);
  }

  // Step 3: Add items to cart
  addToCart(1);
  addToCart(3);

  // Step 4: Show cart
  console.log("Cart Items:");
  console.log(cart);

} else {
  console.log("Invalid Credentials");
}
// Final Project
const fs = require("fs");

// LOGIN
function login(storedUser, storedPass, enteredUser, enteredPass) {
    if (storedUser === enteredUser && storedPass === enteredPass) {
        return true;
    }
    throw new Error("Invalid Credentials");
}


// LOAD PRODUCTS
function loadProducts() {
    const data = fs.readFileSync("products.json", "utf8");
    return JSON.parse(data);
}


// DISPLAY PRODUCTS
function displayProducts(products) {
    console.log("\nAvailable Products:");

    products.forEach(product => {
        console.log(
            `${product.id}. ${product.name} - ₹${product.price}`
        );
    });
}

// CART
const cart = [];

function addToCart(productId, products) {
    const product = products.find(p => p.id === productId);

    if (product) {
        cart.push(product);
        console.log(`${product.name} added to cart`);
    } else {
        console.log("Product not found");
    }
}


// VIEW CART
function viewCart() {
    console.log("\nCart Items:");

    if (cart.length === 0) {
        console.log("Cart is empty");
        return;
    }

    cart.forEach(item => {
        console.log(
            `${item.name} - ₹${item.price}`
        );
    });
}

// CHECKOUT
function checkout() {

    if (cart.length === 0) {
        console.log("Cart is empty");
        return;
    }

    let total = 0;

    cart.forEach(item => {
        total += item.price;
    });

    console.log("\nCheckout Summary");
    console.log("----------------");
    console.log(`Items: ${cart.length}`);
    console.log(`Total Amount: ₹${total}`);
    console.log("Order Placed Successfully!");
}

// MAIN PROGRAM
try {
const isLoggedIn = login(
        "rahul",
        "12345",
        "rahul",
        "12345"
    );

    if (isLoggedIn) {

        console.log("Login Success");

        const products = loadProducts();

        displayProducts(products);

        addToCart(1, products);
        addToCart(3, products);

        viewCart();

        checkout();
    }

} catch (error) {
    console.log("Error:", error.message);
}
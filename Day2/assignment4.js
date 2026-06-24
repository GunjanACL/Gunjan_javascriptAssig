//Build Cart class with add/remove items
class Cart {
  constructor() {
    this.items = [];
  }

  // Add item to cart
  addItem(product) {
    this.items.push(product);
    console.log(`${product.name} added to cart`);
  }

  // Remove item by id
  removeItem(productId) {
    const index = this.items.findIndex(item => item.id === productId);

    if (index !== -1) {
      const removed = this.items.splice(index, 1);
      console.log(`${removed[0].name} removed from cart`);
    } else {
      console.log("Item not found in cart");
    }
  }

  // View cart items
  viewCart() {
    console.log("\nCart Items:");

    if (this.items.length === 0) {
      console.log("Cart is empty");
      return;
    }

    this.items.forEach(item => {
      console.log(`${item.id}. ${item.name} - ₹${item.price}`);
    });
  }
}


// Example usage
const cart = new Cart();

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Tablet", price: 15000 }
];

// Add items
cart.addItem(products[0]);
cart.addItem(products[1]);

// View cart
cart.viewCart();

// Remove item
cart.removeItem(1);

// View again
cart.viewCart();
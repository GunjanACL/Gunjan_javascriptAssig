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
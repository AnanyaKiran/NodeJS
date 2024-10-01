const API = "https://dummyjson.com/products";

// Function to fetch products from the API
async function fetchProducts() {
  try {
    const response = await fetch(API);
    const data = await response.json();
    displayProducts(data.products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Function to display products in the DOM
function displayProducts(products) {
  const productContainer = document.getElementById("products");

  // Loop through each product and create HTML for it
  products.forEach(product => {
    const productHTML = `
      <div class="product">
        <img src="${product.thumbnail}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description.substring(0, 100)}...</p>
        <p><span>Price:</span> $${product.price}</p>
      </div>
    `;
    
    // Insert the product into the product container
    productContainer.innerHTML += productHTML;
  });
}

// Call the fetchProducts function to load the products when the page loads
fetchProducts();

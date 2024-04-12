// products.js
document.addEventListener('DOMContentLoaded', fetchProducts);


function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => {
            const productsContainer = document.getElementById('products-container');
            productsContainer.innerHTML = ''; // Clear the container before adding new product items

            products.forEach(product => {
                productsContainer.innerHTML += `
                    <div class="product">
                        <img src="${product.image}" alt="${product.title}" />
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                        <p>Price: $${product.price}</p>
                        <button onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                `;
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}

products.forEach(product => {
    productsContainer.innerHTML += `
        <div class="product">
            <img src="${product.image}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <p>Price: $${product.price}</p>
            <div class="quantity-controls">
                <button onclick="decreaseQuantity(${product.id})">-</button>
                <span id="quantity-${product.id}">1</span>
                <button onclick="increaseQuantity(${product.id})">+</button>
            </div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
});


products.forEach(product => {
    productsContainer.innerHTML += `
        <div class="product">
            <img src="${product.image}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
});


function addToCart(product) {
    // Retrieve the existing cart from local storage or create a new one if it doesn't exist.
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart.
    let existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        // If the product is already in the cart, just increase its quantity.
        existingProduct.quantity += 1;
    } else {
        // If the product is not in the cart, add it with a quantity of 1.
        product.quantity = 1;
        cart.push(product);
    }

    // Save the updated cart back to local storage.
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart icon count.
    updateCartIcon();
}

function updateCartIcon() {
    // Retrieve the cart from local storage.
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Calculate the total number of items in the cart.
    let totalCount = cart.reduce((total, product) => total + product.quantity, 0);

    // Update the cart icon with the new count.
    document.getElementById('cartItemCount').textContent = totalCount;
}

// This function can be called during page load to ensure the cart count is accurate.
document.addEventListener('DOMContentLoaded', updateCartIcon);

// Fetch a limited number of cart items from the API
function fetchLimitedCartItems(limit) {
    fetch(`https://fakestoreapi.com/carts?limit=${limit}`)
        .then(response => response.json())
        .then(cartItems => {
            // Process the fetched cart items
            console.log(cartItems); // Example: Log the cart items to the console
        })
        .catch(error => console.error('Error fetching limited cart items:', error));
}

// Fetch cart items sorted in descending order from the API
function fetchSortedCartItems() {
    fetch('https://fakestoreapi.com/carts?sort=desc')
        .then(response => response.json())
        .then(cartItems => {
            // Process the fetched cart items
            console.log(cartItems); // Example: Log the cart items to the console
        })
        .catch(error => console.error('Error fetching sorted cart items:', error));
}

// Example usage
fetchLimitedCartItems(5); // Fetch and log only 5 cart items
fetchSortedCartItems(); // Fetch and log cart items sorted in descending order

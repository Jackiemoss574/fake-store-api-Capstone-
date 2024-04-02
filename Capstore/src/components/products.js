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

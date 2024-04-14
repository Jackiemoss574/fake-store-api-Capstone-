// products.js

// Function to fetch products from the API
async function fetchProducts() {
  try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
          throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching products:', error);
      return [];
  }
}

// Function to display products on the page
function displayProducts(products) {
  const productsContainer = document.getElementById('products-container');
  productsContainer.innerHTML = ''; // Clear previous content

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
}

// Function to fetch cart items from the API
async function fetchCartItems() {
  try {
      const response = await fetch('https://fakestoreapi.com/carts/user/1');
      if (!response.ok) {
          throw new Error('Failed to fetch cart items');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching cart items:', error);
      return [];
  }
}

// Function to initialize the products page
async function initProductsPage() {
  // Fetch products from the API
  const products = await fetchProducts();

  // Display products on the page
  displayProducts(products);
}

// Initialize the products page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initProductsPage);

// Function to add a product to the cart
function addToCart(productId) {
  // Implement adding a product to the cart
  console.log('Product added to cart:', productId);
}


// products.js

// Function to add a product to the cart
function addToCart(productId) {
  // Implement adding a product to the cart
  console.log('Product added to cart:', productId);
}

// Function to fetch cart items from the API
async function fetchCartItems() {
  try {
      const response = await fetch('https://fakestoreapi.com/carts/user/1');
      if (!response.ok) {
          throw new Error('Failed to fetch cart items');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching cart items:', error);
      return [];
  }
}

// Function to display cart items on the page
function displayCartItems(cartItems) {
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = ''; // Clear previous content

  cartItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');

      // Display item details (name, price, quantity, etc.)
      // Modify this part based on the structure of your API response
      itemElement.innerHTML = `
          <div>${item.name}</div>
          <div>Quantity: ${item.quantity}</div>
          <div>Price: $${item.price}</div>
          <button class="increase-quantity-btn">+</button>
          <button class="decrease-quantity-btn">-</button>
          <button class="remove-item-btn">Remove</button>
      `;

      cartItemsContainer.appendChild(itemElement);
  });
}

// Function to initialize the cart page
async function initCartPage() {
  // Fetch cart items from the API
  const cartItems = await fetchCartItems();

  // Display cart items on the page
  displayCartItems(cartItems);
}

// Initialize the cart page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initCartPage);

// Function to update the cart count in the navigation bar
function updateCartCount(count) {
  const cartCountElement = document.getElementById('cartItemCount');
  cartCountElement.textContent = count;
}

// Function to calculate the total price of all items in the cart
function calculateTotalPrice(cartItems) {
  return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Function to handle the click event for the "Ready to Checkout" button
function handleCheckoutButtonClick() {
  // Implement checkout functionality here
  alert('Ready to checkout!');
}

// Initialize the cart page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initCartPage);

// Function to display the mini cart when hovering over the cart icon
function showMiniCart() {
  const miniCart = document.getElementById('miniCart');
  miniCart.style.display = 'block';
}

// Function to hide the mini cart when moving away from the cart icon
function hideMiniCart() {
  const miniCart = document.getElementById('miniCart');
  miniCart.style.display = 'none';
}

// Function to update the mini cart with the latest cart items
function updateMiniCart(cartItems) {
  const miniCart = document.getElementById('miniCart');
  const miniCartContent = document.createElement('div');

  // Clear previous content
  miniCart.innerHTML = '';

  cartItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.textContent = `${item.name}: ${item.quantity}`;
      miniCartContent.appendChild(itemElement);
  });

  miniCart.appendChild(miniCartContent);
}

// Initialize the mini cart with cart items when the DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
  // Fetch cart items from the API
  const cartItems = await fetchCartItems();

  // Update mini cart with cart items
  updateMiniCart(cartItems);
});

// products.js
document.addEventListener('DOMContentLoaded', fetchAndDisplayProducts);

function fetchAndDisplayProducts() {
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

// Function to fetch and display products based on sorting criteria
function sortProducts(criteria) {
    fetch(`https://fakestoreapi.com/products?sort=${criteria}`)
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
        .catch(error => console.error('Error sorting products:', error));
}

// Function to fetch and display products based on filtering criteria
function filterProducts(criteria) {
    fetch(`https://fakestoreapi.com/products?category=${criteria}`)
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
        .catch(error => console.error('Error filtering products:', error));
}

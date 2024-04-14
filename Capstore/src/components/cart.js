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
  
  // Function to initialize the cart page
  async function initCartPage() {
    // Fetch cart items from the API
    const cartItems = await fetchCartItems();
    
    // Display cart items on the page
    displayCartItems(cartItems);
    
    // Update cart count in the navigation bar
    updateCartCount(cartItems.length);
    
    // Calculate and display the total price
    const totalPrice = calculateTotalPrice(cartItems);
    console.log('Total Price:', totalPrice);
    
    // Add event listeners for quantity buttons and remove item buttons
    
    // Add event listener for "Ready to Checkout" button
    const checkoutButton = document.getElementById('checkoutButton');
    checkoutButton.addEventListener('click', handleCheckoutButtonClick);
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
  
  
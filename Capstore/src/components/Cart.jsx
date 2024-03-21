import React, { useState, useEffect } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from the API when the component mounts
    fetch('https://fakestoreapi.com/carts/user/1') // Assuming '1' is the user ID
      .then(res => res.json())
      .then(json => setCartItems(json.products)) // You might need to adjust this depending on the API response shape
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

  const removeFromCart = (productId) => {
    // Remove item from cart locally
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);

    // Here you'd also want to update the cart on the backend
    // The fake store API doesn't support modifying carts directly,
    // but in a real API, you'd send a DELETE request here.
  };

  const clearCart = () => {
    // Clear the cart locally
    setCartItems([]);

    // Clear the cart on the backend, if applicable
    // This might be a DELETE request to clear the user's cart
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.title} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Checkout</button>
    </div>
  );
}

export default Cart;

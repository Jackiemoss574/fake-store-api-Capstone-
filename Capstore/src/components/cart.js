function addToCart(productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let found = cart.find(item => item.productId === product.id);

            if (found) {
                found.quantity += 1;
            } else {
                cart.push({
                    productId: product.id,
                    productName: product.title,
                    price: product.price,
                    quantity: 1
                });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartIcon(); // Update cart icon count
            showMiniCart(); // Show mini cart
        });
}

fetch('https://fakestoreapi.com/carts')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error fetching carts:', error));

fetch('https://fakestoreapi.com/carts/5')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error fetching cart:', error));

function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartItemCount').innerText = itemCount;
}

function showMiniCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let miniCart = document.getElementById('miniCart');
    miniCart.innerHTML = ''; // Clear previous contents
    cart.forEach(item => {
        let itemElement = document.createElement('p');
        itemElement.textContent = `${item.productName} - Qty: ${item.quantity}`;
        miniCart.appendChild(itemElement);
    });
    miniCart.style.display = 'block';
}

function hideMiniCart() {
    document.getElementById('miniCart').style.display = 'none';
}

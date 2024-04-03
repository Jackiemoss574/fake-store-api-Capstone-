function addToCart(productId) {
    fetch(`https://example.com/api/products/${productId}`)
    .then(response => response.json())
    .then(product => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let found = cart.find(item => item.productId === product.id);

        if (found) {
            found.quantity += 1;
        } else {
            cart.push({
                productId: product.id,
                productName: product.name,
                price: product.price,
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartIcon(); // Update cart icon count
    });
}

function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartItemCount').innerText = itemCount; 
    existingProduct.quantity = parseInt(existingProduct.quantity, 10) + 1;


    
<div id="cartIcon" onmouseover="showMiniCart()" onmouseout="hideMiniCart()">
    <span id="cartItemCount">0</span> <!-- Cart item count -->
    <div id="miniCart" style="display: none;"> <!-- Mini cart popup -->
        <!-- Mini cart content will be populated by JavaScript -->
    </div>
</div>
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

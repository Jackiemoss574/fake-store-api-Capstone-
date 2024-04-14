// Fetch single product data from API
fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(productData => {
        // Extract relevant data from productData
        const { title, price, description, image } = productData;

        // Create HTML elements to display the product information
        const productContainer = document.createElement('div');
        productContainer.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = image;
        productImage.alt = title;
        productImage.style.width = '100%';

        const productInfo = document.createElement('p');
        productInfo.innerHTML = `${title}<br>$${price}<br>${description}`;

        // Append product image and info to the product container
        productContainer.appendChild(productImage);
        productContainer.appendChild(productInfo);

        // Append the product container to the featured products section
        const featuredProductsSection = document.querySelector('.featured-products');
        featuredProductsSection.appendChild(productContainer);
    })
    .catch(error => console.error('Error fetching product data:', error));

document.addEventListener("DOMContentLoaded", function() {
    
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const quantityElement = document.getElementById('quantity');
  
    decrementButton.addEventListener('click', function() {
      let currentQuantity = parseInt(quantityElement.textContent.split(": ")[1], 10);
      if (currentQuantity > 1) {
        currentQuantity -= 1;
        quantityElement.textContent = `Qty: ${currentQuantity}`;
      }
    });
  
    incrementButton.addEventListener('click', function() {
      let currentQuantity = parseInt(quantityElement.textContent.split(": ")[1], 10);
      currentQuantity += 1;
      quantityElement.textContent = `Qty: ${currentQuantity}`;
    });
    
  });


  // === productTemplate function ===
// Function to populate the product template
function populateProductDetails(product) {
  // Update product title
  document.querySelector('.left-main h1').textContent = product.title;
  // Update product description
  document.querySelector('.left-main p').textContent = product.description;
  // Update product price
  document.querySelector('.price').textContent = `$${product.price.toFixed(2)}`;

  // Populate colors dropdown
  const colorSelect = document.querySelector('.color-select');
  product.colors.forEach(color => {
      const option = document.createElement('option');
      option.textContent = color;
      colorSelect.appendChild(option);
  });

  // Set rating stars
  const rating = Math.round(product.rating); // assuming rating is out of 5
  const stars = document.querySelectorAll('.icons-all i');
  stars.forEach((star, index) => {
      if (index < rating) {
          star.classList.add('fa-solid');
          star.classList.remove('fa-regular');
      }
  });

  // Handle wishlist state
  if (product.wishlist) {
      const heartIcon = document.querySelector('.sp-all .fa-heart');
      heartIcon.classList.add('fa-solid');
      heartIcon.classList.remove('fa-regular');
  }

  // Populate product images and set the main image
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumbnail, index) => {
      if (product.images[index]) {
          thumbnail.setAttribute('data-img', product.images[index]);
          thumbnail.querySelector('img').src = product.images[index];
      }
  });
  document.getElementById('mainImage').src = product.images[0] || '';

  // Event listener for thumbnail click
  document.addEventListener('click', function(e) {
      if (e.target && e.target.parentElement.classList.contains('thumbnail')) {
          const newImage = e.target.parentElement.getAttribute('data-img');
          document.getElementById('mainImage').src = newImage;
      }
  });
}

// Fetch the product details and populate the page
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

if (productId) {
  fetch(`http://localhost:3000/products/${productId}`)
      .then(response => response.json())
      .then(product => {
          populateProductDetails(product);
      })
      .catch(error => console.error('Error fetching product:', error));
}




 

  




document.addEventListener("DOMContentLoaded", function () {
  const decrementButton = document.getElementById("decrement");
  const incrementButton = document.getElementById("increment");
  const quantityElement = document.getElementById("quantity");

  decrementButton.addEventListener("click", function () {
    let currentQuantity = parseInt(
      quantityElement.textContent.split(": ")[1],
      10
    );
    if (currentQuantity > 1) {
      currentQuantity -= 1;
      quantityElement.textContent = `Qty: ${currentQuantity}`;
    }
  });

  incrementButton.addEventListener("click", function () {
    let currentQuantity = parseInt(
      quantityElement.textContent.split(": ")[1],
      10
    );
    currentQuantity += 1;
    quantityElement.textContent = `Qty: ${currentQuantity}`;
  });

});



document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");

  fetch("db.json")
    .then((res) => res.json())
    .then((data) => {
      const product = data.productAlls.find(
        (p) => p.id === parseInt(productId)
      );

      if (product) {
        const html = `
        <div class="col-md-6 left-main">
        <div class="mb-3 sp-all">
          <span class="mr-2 sp1">Span 1</span>
            <i class="fa-regular fa-heart"></i>
           <span>Add to wishlist</span>
            </div>
            <div class="mb-3 icons-all">
            <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              </div>
            <h1 class="mb-3 product-title">${product.title1}</h1>
            <p class="mb-3 product-description">
              ${product.description}
           </p>
            <div class="mb-3 color-all">
              <p>Color:</p>
              <select class="color-select">
               <option value="">Black</option>
                <option value="">Red</option>
              </select>
            </div>
            <div class="d-flex mb-3 price-main">
                <span class="price">${product.price}</span>
              <div class="d-flex align-items-center btn-all">
                  <button id="decrement" class="btn mr-2">-</button>
                  <span class="quantity" id="quantity">Qty: 1</span>
                  <button id="increment" class="btn ml-2">+</button>
              </div>
              </div>
              <div class="second-btns">
                <button class="btn mr-2">Add to Cart</button>
                <button class="btn">Buy it now</button>
              </div>
            </div>

            <div class="col-md-6 right-main">
              <div class="d-flex align-items-start">
                <div class="slider-thumbnails mr-3">
                  <div class="mb-2 thumbnail" data-img="">
                   <img src="${product.photo1}" alt="" />
                  </div>
                  <div class="mb-2 thumbnail" data-img="">
                    <img src="${product.photo2}" alt="" />
                  </div>
                </div>
                <div class="product-image-box" id="colorBox">
                  <img id="mainImage" src="${product.image}" alt="" />
                </div>
              </div>
            </div>
        `;

        document.querySelector("#pro-detail").innerHTML = html;
      } else {
        const errorHtml = `<p>Product not found</p>`;
        document.querySelector("#pro-detail").innerHTML = errorHtml;
      }
    });
});

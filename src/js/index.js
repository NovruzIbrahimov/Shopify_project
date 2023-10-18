// 1. Burger menyunun acilmasi
const burgerMenu = document.getElementById("burger-menu");
const mainNav = document.getElementById("main-nav");

burgerMenu.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

// 2. Sag terefde acilan sebetin acilib-baglanma funksiyasi
document.addEventListener("DOMContentLoaded", function () {
  var cartIcon = document.getElementById("cartIcon");
  var cartCard = document.getElementById("cartCard");
  var closeCart = document.getElementById("closeCart");

  function toggleCart() {
    if (cartCard.style.display === "none" || !cartCard.style.display) {
      cartCard.style.display = "block";
    } else {
      cartCard.style.display = "none";
    }
  }
  // kart iconuna klik edende
  cartIcon.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    toggleCart();
  });
  // baglamaq iconunu klik edende
  closeCart.addEventListener("click", function (event) {
    event.stopPropagation();
    cartCard.style.display = "none";
  });
  // dokument klik hadisesi
  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".cart-shopping-icon") &&
      event.target !== closeCart
    ) {
      cartCard.style.display = "none";
    }
  });
});

// 3. Sehifeni asagi eledikce headerin ustde qalmasi

document.addEventListener("scroll", function () {
  const header1 = document.querySelector(".header-1");
  const header2 = document.querySelector(".header-2");

  if (window.pageYOffset > 0) {
    header1.style.backgroundColor = "black";
    header2.style.transform = "translateY(-100%)"; // Hide header-2
  } else {
    header1.style.backgroundColor = "transparent";
    header2.style.transform = "translateY(0)"; // Show header-2
  }
});

// 4. Quantity artirib ve azaltma funksiyasi
document.addEventListener("DOMContentLoaded", function () {
  const decrementButton = document.getElementById("decrement");
  const incrementButton = document.getElementById("increment");
  const quantityElement = document.getElementById("quantity2");

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

// 5. Say artirib azaldanda shopping cart iconun ustundeki icona dusme funksiyasi

document.addEventListener("DOMContentLoaded", function () {
  let itemCount = parseInt(document.getElementById("itemCount").innerText);

  document.getElementById("decrement").addEventListener("click", function () {
    if (itemCount > 0) {
      itemCount--;
    }
    updateUI();
  });

  document.getElementById("increment").addEventListener("click", function () {
    itemCount++;
    updateUI();
  });

  function updateUI() {
    document.getElementById("quantity2").innerText = "Qty: " + itemCount;
    document.getElementById("itemCount").innerText = itemCount;
  }
});

// 6.  Sag terefde acilan sebetdeki item sozunde reqem emele getirib silen funksiya

document.addEventListener("DOMContentLoaded", function () {
  let miniItem = parseInt(document.getElementById("miniItem").innerText);

  document.getElementById("decrement").addEventListener("click", function () {
    if (miniItem > 0) {
      miniItem--;
    }
    updateUI();
  });

  document.getElementById("increment").addEventListener("click", function () {
    miniItem++;
    updateUI();
  });

  function updateUI() {
    document.getElementById("quantity2").innerText = "Qty: " + miniItem;
    document.getElementById("miniItem").innerText = miniItem;
  }
});

// 7. Sag terefde acilan sebetde mini-cart silmek funksiyasi

document.addEventListener("DOMContentLoaded", function () {
  const cartContent = document.getElementById("cartContent");

  cartContent.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-icon")) {
      e.target.closest(".cart-item").remove();
    }
  });
});


// 8. Section2 de add to elemek

function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId) {
  const cart = getCart();
  const cartItem = cart.find(item => item.productId === productId);

  if (cartItem) {
      cartItem.count++;
  } else {
      cart.push({ productId: productId, count: 1 });
  }

  saveCart(cart);
}

fetch("db.json")
  .then((res) => res.json())
  .then((data) => {
      let html = "";

      data.products.forEach((product) => {
          html += `
              <div class="card  col-md-3">
                  <p>${product.title1}</p>
                  <div class="card-image-wrapper">
                      <img src="${product.image}" alt="Image" class="card-img-top" />
                      <div class="icon-wrapper">
                          <i class="fa-regular fa-heart icon1"></i>
                          <i class="fa-regular fa-eye icon2"></i>
                          <i class="fa-solid fa-code-compare icon3"></i>
                      </div>
                  </div>
                  <select name="options" class="select_1">
                      ${product.options
                          .map((option) => `<option value="${option}">${option}</option>`)
                          .join("")
                      }
                  </select>
                  <div class="card-body d-flex justify-content-between align-items-center">
                      <span>${product.price}</span>
                      <button data-product-id="${product.id}" class="add-to-cart-btn">Add to Cart</button>
                  </div>
              </div>`;
      });

      document.querySelector(" .main-row ").innerHTML = html;
  });

document.body.addEventListener('click', function(event) {
  if (event.target.classList.contains('add-to-cart-btn')) {
      const productId = parseInt(event.target.getAttribute('data-product-id'));
      addToCart(productId);
      window.location.href = "cart.html"; 
  }
});


// 9. Section3 de add to etmek

function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId) {
  const cart = getCart();
  const cartItem = cart.find(item => item.productId === productId);

  if (cartItem) {
      cartItem.count++;
  } else {
      cart.push({ productId: productId, count: 1 });
  }

  saveCart(cart);
}

fetch("db.json")
  .then((res) => res.json())
  .then((data) => {
      let html = "";

      data.products2.forEach((product) => {
        html += `
          
       <div class="card col-md-4">
          <p>${product.title1}</p>
          <div class="card-image-wrapper">
            <img src="${product.image}" alt="Image" class="card-img-top" />
            <div class="icon-wrapper">
              <i class="fa-regular fa-heart icon1"></i>
              <i class="fa-regular fa-eye icon2"></i>
              <i class="fa-solid fa-code-compare icon3"></i>
            </div>
          </div>
          <select name="options" class="select_3">
            ${product.options
              .map((option) => `<option value="${option}">${option}</option>`)
              .join("")}
          </select>
          <div class="card-body d-flex justify-content-between align-items-center">
            <span>${product.price}</span>
            <button data-product-id="${product.id}" class="add-to-cart-btn">Add to Cart</button>
          </div>
       </div>
         
          `;
      });

      document.querySelector(".main-row2 ").innerHTML = html;
  });

document.body.addEventListener('click', function(event) {
  if (event.target.classList.contains('add-to-cart-btn')) {
      const productId = parseInt(event.target.getAttribute('data-product-id'));
      addToCart(productId);
      window.location.href = "cart.html"; 
  }
});
 

  
// 10. Section8-de Dinamik cart yaratmaqcun funksiya ve add to etmek

function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId) {
  const cart = getCart();
  const cartItem = cart.find(item => item.productId === productId);

  if (cartItem) {
      cartItem.count++;
  } else {
      cart.push({ productId: productId, count: 1 });
  }

  saveCart(cart);
}

fetch("db.json")
  .then((res) => res.json())
  .then((data) => {
      let html = "";

      data.products1.forEach((product) => {
        html += `
          
       <div class="card col-md-3">
          <p>${product.title1}</p>
          <div class="card-image-wrapper">
            <img src="${product.image}" alt="Image" class="card-img-top" />
            <div class="icon-wrapper">
              <i class="fa-regular fa-heart icon1"></i>
              <i class="fa-regular fa-eye icon2"></i>
              <i class="fa-solid fa-code-compare icon3"></i>
            </div>
          </div>
          <select name="options" class="select_8">
            ${product.options
              .map((option) => `<option value="${option}">${option}</option>`)
              .join("")}
          </select>
          <div class="card-body d-flex justify-content-between align-items-center">
            <span>${product.price}</span>
            <button data-product-id="${product.id}" class="add-to-cart-btn">Add to Cart</button>
          </div>
       </div>
         
          
          `;
      });

      document.querySelector(".row .sect_8 ").innerHTML = html;
  });

document.body.addEventListener('click', function(event) {
  if (event.target.classList.contains('add-to-cart-btn')) {
      const productId = parseInt(event.target.getAttribute('data-product-id'));
      addToCart(productId);
      window.location.href = "cart.html"; 
  }
});



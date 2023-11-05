// 2. Sag terefde acilan sebetin acilib-baglanma funksiyasi START----------------------------
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
// 2. Sag terefde acilan sebetin acilib-baglanma funksiyasi END----------------------------

// 3. Sehifeni asagi eledikce headerin ustde qalmasi START---------------------------------
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
// 3. Sehifeni asagi eledikce headerin ustde qalmasi END---------------------------------

// 4. Quantity artirib ve azaltma funksiyasi START----------------------------------------
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
    if (currentQuantity < 1)
    currentQuantity += 1;
    quantityElement.textContent = `Qty: ${currentQuantity}`;
  });
});
// 4. Quantity artirib ve azaltma funksiyasi END----------------------------------------

// 5. Say artirib azaldanda shopping cart iconun ustundeki icona dusme funksiyasi START-------------------
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
// 5. Say artirib azaldanda shopping cart iconun ustundeki icona dusme funksiyasi END-------------------

// 6.  Sag terefde acilan sebetdeki item sozunde reqem emele getirib silen funksiya START-----------------
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
// 6.  Sag terefde acilan sebetdeki item sozunde reqem emele getirib silen funksiya END-----------------


// 7. Sag terefde acilan sebetde mini-cart silmek funksiyasi START--------------------------
document.addEventListener("DOMContentLoaded", () => {
  const cartContent = document.getElementById("cartContent");
  const itemCountElement = document.getElementById("itemCount");
  const miniItemCountElement = document.getElementById("miniItem");

  cartContent.addEventListener("click", e => {
      if (e.target.classList.contains("delete-icon")) {
          e.target.closest(".cart-item").remove();
          updateItemCount();
      }
  });

  function updateItemCount() {
      const itemCount = document.querySelectorAll(".cart-item").length;
      itemCountElement.innerText = itemCount;
      miniItemCountElement.innerText = itemCount === 0 ? 'No Items' : `${itemCount} Items`;
  }
});
// 7. Sag terefde acilan sebetde mini-cart silmek funksiyasi END--------------------------


// 8. Section2 de add to elemek START------------------------------------
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
  console.log('cartItem=>',cartItem)
}





fetch("db.json")
  .then((res) => res.json())
  .then((data) => {
      let html = "";

      data.products.forEach((product) => {
          html += `
          <div class="swiper-slide">
          <div class="box">
            <div class="top-text" id="top-text-clone">
              <h1>${product.title1}</h1>
            </div>
            <div class="top-img mb-5 mt-5">
              <img
                src="${product.image}"
                alt=""
                class="card-img-top"
              />
              <div class="icon-wrapper">
                <i class="fa-regular fa-heart icon1"></i>
                <i class="fa-regular fa-eye icon2 view-detail-pro" data-product-id="${product.id}" ></i>
                <i class="fa-solid fa-code-compare icon3"></i>
              </div>
            </div>
            <select
              name="options"
              class="select_main"
              id="select_main_clone"
            >
            ${product.options
             .map((option) => `<option value="${option}">${option}</option>`)
             .join("")}
            </select>
            <div
              class="bottom-text d-flex justify-content-between align-items-center mt-4 mb-3"
            >
              <span class="span-clone">${product.price}</span>
              <button
                data-product-id="${product.id}"
                class="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>`;
      });

      document.querySelector(".swiper .swiper-wrapper").innerHTML = html;
  });
function openProductDEtail(productId){
  const cart = getCart();
  const product = cart.find(item => item.productId === productId);
  console.log('product',product)
  product && localStorage.setItem('product-detail', JSON.stringify(product));
}
// 8. Section2 de add to elemek END------------------------------------


// 9. Section3 de add to etmek START--------------------------------------
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
      const newData = data.productAlls.splice(1,3)
      newData.forEach((product) => {
        html += `
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="box">
          <div class="top-text">
            <h1>${product.title1}</h1>
          </div>
          <div class="top-img mb-5 mt-5">
            <img
              src="${product.image}"
              alt=""
              class="card-img-top"
            />
            <div class="icon-wrapper">
              <i class="fa-regular fa-heart icon1"></i>
              <i class="fa-regular fa-eye icon2 view-detail-pro" data-product-id="${product.id}"></i>
              <i class="fa-solid fa-code-compare icon3"></i>
            </div>
          </div>
          <select name="options" class="select_main">
          ${product.options
            .map((option) => `<option value="${option}">${option}</option>`)
            .join("")}
          </select>
          <div
            class="bottom-text d-flex justify-content-between align-items-center mt-4 mb-3"
          >
            <span>${product.price}</span>
            <button
              data-product-id="${product.id}"
              class="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      
          `;
      });

      document.querySelector(".all-box-1 .row ").innerHTML = html;
  });

  
document.body.addEventListener('click', function(event) {
  if (event.target.classList.contains('add-to-cart-btn')) {
      const productId = parseInt(event.target.getAttribute('data-product-id'));
      addToCart(productId);
      window.location.href = "cart.html"; 
  }
  if (event.target.classList.contains('view-detail-pro')) {
    const productId = parseInt(event.target.getAttribute('data-product-id'));
    window.location.href = `productdetail.html?productId=${productId}`; 
  }
});
// 9. Section3 de add to etmek END--------------------------------------
 

  










// 10. Section8-de Dinamik cart yaratmaqcun funksiya ve add to etmek

// function getCart() {
//   const cart = localStorage.getItem('cart');
//   return cart ? JSON.parse(cart) : [];
// }

// function saveCart(cart) {
//   localStorage.setItem('cart', JSON.stringify(cart));
// }

// function addToCart(productId) {
//   const cart = getCart();
//   const cartItem = cart.find(item => item.productId === productId);
//   console.log(1)
//   if (cartItem) {
//       cartItem.count++;
//   } else {
//       cart.push({ productId: productId, count: 1 });
//   }

//   saveCart(cart);
// }

// fetch("db.json")
//   .then((res) => res.json())
//   .then((data) => {
//       let html = "";

//       data.products1.forEach((product) => {
//         html += `
          
//        <div class="card col-md-3">
//           <p>${product.title1}</p>
//           <div class="card-image-wrapper">
//             <img src="${product.image}" alt="Image" class="card-img-top" />
//             <div class="icon-wrapper">
//               <i class="fa-regular fa-heart icon1"></i>
//               <i class="fa-regular fa-eye icon2"></i>
//               <i class="fa-solid fa-code-compare icon3"></i>
//             </div>
//           </div>
//           <select name="options" class="select_8">
//             ${product.options
//               .map((option) => `<option value="${option}">${option}</option>`)
//               .join("")}
//           </select>
//           <div class="card-body d-flex justify-content-between align-items-center">
//             <span>${product.price}</span>
//             <button data-product-id="${product.id}" class="add-to-cart-btn">Add to Cart</button>
//           </div>
//        </div>
         
          
//           `;
//       });

//       document.querySelector(".row.main-row-3").innerHTML = html;
//   });

// document.body.addEventListener('click', function(event) {
//   if (event.target.classList.contains('add-to-cart-btn')) {
//       const productId = parseInt(event.target.getAttribute('data-product-id'));
//       addToCart(productId);
//       window.location.href = "cart.html"; 
//   }
// });



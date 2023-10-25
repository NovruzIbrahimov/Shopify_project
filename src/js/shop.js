// 1. Sag terefde acilan sebetin acilib-baglanma funksiyasi
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
  
  
  // 2. Sehifeni asagi eledikce headerin ustde qalmasi
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

  // 3. Quantity artirib ve azaltma funksiyasi
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

// 4. Say artirib azaldanda shopping cart iconun ustundeki icona dusme funksiyasi

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

// 5.  Sag terefde acilan sebetdeki item sozunde reqem emele getirib silen funksiya

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

// 6. Sag terefde acilan sebetde mini-cart silmek funksiyasi

document.addEventListener("DOMContentLoaded", function () {
  const cartContent = document.getElementById("cartContent");

  cartContent.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-icon")) {
      e.target.closest(".cart-item").remove();
    }
  });
});


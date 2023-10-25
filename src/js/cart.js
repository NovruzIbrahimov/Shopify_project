let totalBasketCount = document.querySelector("#totalbasketcount");
let totalBasketPrice = document.querySelector("#totalbasketprice")
let basket = JSON.parse(localStorage.getItem("basket"))

if(localStorage.getItem("basket") == null){
    localStorage.setItem("basket", JSON.stringify([]))
    totalBasketCount.innerHTML = 0
    totalBasketPrice.innerHTML = 0
}else{

    let sum = 0;
    let price = 0
    basket.map(a => sum += a.count);
    basket.map(a => price += Number(a.count) * Number(a.price));
    
    totalBasketPrice.innerHTML = price.toFixed(2)
    totalBasketCount.innerHTML = sum
}


async function getAllProducts() {
    const res = await fetch("db.json");
    const data = await res.json();
    return [...data.products, ...data.products1, ...data.products2];
}

function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}


function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}


async function fetchAndDisplayCartItems() {
    const products = await getAllProducts();
    const cart = getCart();

    let totalItems = 0;
    let totalPrice = 0;

    const cartItems = cart.map(cartItem => {
        const product = products.find(p => p.id === cartItem.productId);
        return {
            ...product,
            count: cartItem.count
        };
    });

    const basketProductsDiv = document.querySelector('.basket-products');
    basketProductsDiv.innerHTML = ''; 

    cartItems.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('custom-card');
        productDiv.innerHTML = `
            <div class="img-div">
                <img src="${item.image}" alt="${item.title1}" />
            </div>
            <div class="content">
                <p class="title">${item.title1}</p>
                <p class="price">${item.price}$ x ${item.count} = ${(parseFloat(item.price) * item.count).toFixed(2)}$</p>
            </div>
            <div class="count-controller">
                <button class="decrease-btn" data-product-id="${item.id}">-</button>
                <span class="item-count">${item.count}</span>
                <button class "increase-btn" data-product-id="${item.id}">+</button>
            </div>`;
        basketProductsDiv.appendChild(productDiv);

        totalItems += item.count;
        totalPrice += parseFloat(item.price) * item.count;
    });

    document.querySelector('#totalbasketcount').textContent = totalItems;
    document.querySelector('#totalbasketprice').textContent = totalPrice.toFixed(2);
}


function increaseItemCount(productId) {
    const cart = getCart();
    const cartItem = cart.find(item => item.productId === productId);
    if (cartItem) {
        cartItem.count++;
        saveCart(cart);
        fetchAndDisplayCartItems();
    }
}

function decreaseItemCount(productId) {
    const cart = getCart();
    const cartItem = cart.find(item => item.productId === productId);
    if (cartItem && cartItem.count > 1) {
        cartItem.count--;
        saveCart(cart);
        fetchAndDisplayCartItems();
    } else if (cartItem.count === 1) {
        const updatedCart = cart.filter(item => item.productId !== productId);
        saveCart(updatedCart);
        fetchAndDisplayCartItems();
    }
}


fetchAndDisplayCartItems();

document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('increase-btn')) {
        const productId = parseInt(event.target.getAttribute('data-product-id'));
        increaseItemCount(productId);
    }
    if (event.target.classList.contains('decrease-btn')) {
        const productId = parseInt(event.target.getAttribute('data-product-id'));
        decreaseItemCount(productId);
    }
});


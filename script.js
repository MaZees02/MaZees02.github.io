let cart = [];


function addToCart(productName, productPrice) {

    const existingProduct = cart.find(
        product => product.name === productName
    );

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1
        });

    }

    updateCart();
}


function increaseQuantity(productName) {

    const product = cart.find(
        product => product.name === productName
    );

    if (product) {
        product.quantity++;
    }

    updateCart();
}


function decreaseQuantity(productName) {

    const product = cart.find(
        product => product.name === productName
    );

    if (product) {

        product.quantity--;

        if (product.quantity === 0) {

            cart = cart.filter(
                item => item.name !== productName
            );

        }

    }

    updateCart();
}


function removeFromCart(productName) {

    cart = cart.filter(
        product => product.name !== productName
    );

    updateCart();
}


function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const totalItems = document.getElementById("total-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;
    let numberOfItems = 0;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

    }


    cart.forEach(function(product) {

        const itemTotal =
            product.price * product.quantity;

        total = total + itemTotal;

        numberOfItems =
            numberOfItems + product.quantity;


        const item = document.createElement("div");

        item.className = "cart-item";


        item.innerHTML = `
            <h3>${product.name}</h3>

            <p>
                ₦${product.price} × ${product.quantity}
            </p>

            <p>
                Subtotal: ₦${itemTotal}
            </p>

            <button onclick="decreaseQuantity('${product.name}')">
                −
            </button>

            <span>${product.quantity}</span>

            <button onclick="increaseQuantity('${product.name}')">
                +
            </button>

            <button onclick="removeFromCart('${product.name}')">
                Remove
            </button>
        `;


        cartItems.appendChild(item);

    });


    cartCount.textContent = numberOfItems;

    totalItems.textContent = numberOfItems;

    cartTotal.textContent = total;

}
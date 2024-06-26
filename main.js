let cart = {};

function toggleCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.style.display = cartContainer.style.display === "none" || cartContainer.style.display === "" ? "block" : "none";
}

function AgregarCarrito(itemName, itemPrice) {
    if (!cart[itemName]) {
        cart[itemName] = { price: parseFloat(itemPrice), quantity: 1 };
    } else {
        cart[itemName].quantity += 1;
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;

    for (const item in cart) {
        const cartItem = cart[item];
        const li = document.createElement("li");
        li.innerHTML = `
            ${item} - $${(cartItem.price * cartItem.quantity).toFixed(2)}
            <select onchange="updateItemQuantity('${item}', this.value)">
                ${Array.from({length: 11}, (_, i) => `<option value="${i}" ${i === cartItem.quantity ? 'selected' : ''}>${i}</option>`).join('')}
            </select>
        `;
        cartItems.appendChild(li);
        total += cartItem.price * cartItem.quantity;
    }

    document.getElementById("total").textContent = "Total: $" + total.toFixed(2);

    const hiddenMessage = document.getElementById("cart-container");
    hiddenMessage.style.display = "block";
}

function updateItemQuantity(itemName, quantity) {
    cart[itemName].quantity = parseInt(quantity);
    if (cart[itemName].quantity === 0) {
        delete cart[itemName];
    }
    updateCart();
}

function clearCart() {
    cart = {};
    updateCart();
}


////hola 

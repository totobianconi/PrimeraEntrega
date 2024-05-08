


function toggleCart() {
    var cartContainer = document.getElementById("cart-container");
    if (cartContainer.style.display === "none" || cartContainer.style.display === "") {
        cartContainer.style.display = "block";
    } else {
        cartContainer.style.display = "none";
    }
}


function AgregarCarrito(itemName, itemPrice) {
    
    var li = document.createElement("li");
    li.textContent = itemName + " - $" + itemPrice;

    
    document.getElementById("cart-items").appendChild(li);

    
    updateTotal(parseFloat(itemPrice));
}


function updateTotal(itemPrice) {
    var totalElement = document.getElementById("total");
    var currentTotal = parseFloat(totalElement.textContent.replace("Total: $", ""));
    var newTotal = currentTotal + itemPrice;
    totalElement.textContent = "Total: $" + newTotal.toFixed(2);
}

o
function clearCart() {
    document.getElementById("cart-items").innerHTML = "";
    document.getElementById("total").textContent = "Total: $0.00";
}

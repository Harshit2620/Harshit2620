function calculateTotalPrice(){
    // Get price and quantity elements
    var priceElement = document.getElementById("price");
    var quantityElement = document.getElementById("quantity");
    var totalElement = document.getElementById("total");
    var subtotalElement = document.getElementById("subtotal");
    var itemCountElement = document.getElementById("item-count");

    // Parse price and quantity values
    var price = parseFloat(priceElement.innerHTML);
    var quantity = parseInt(quantityElement.value);

    // Validate inputs
    if (isNaN(price) || isNaN(quantity) || quantity <= 0) {
        totalElement.innerHTML = "Invalid input";
        subtotalElement.innerHTML = "Invalid input";
        return;
    }

    // Calculate total price
    var totalPrice = price * quantity;

    // Update total price element
    totalElement.innerHTML = totalPrice.toFixed(2);
    subtotalElement.innerHTML = "Rs. " + totalPrice.toFixed(2);
    itemCountElement.innerHTML = quantity;
}
"use strict";
// TODO: Write interface Item
// TODO: Define the properties 'name', 'price', and 'quantity' within the interface
// Create an empty array named 'cart' to store the items
const cart = [];
// TODO: Implement a loop to prompt the user for item details
// Use 'while' loop to keep prompting until an empty item name is entered
while (true) {
    // TODO: Prompt user for item name, price, and quantity
    const itemName = (prompt("Give me item name or if you want to stop leave it blank")); /* TODO: Get user input */
    // Break the loop if an empty item name is entered
    if (itemName === "") {
        break;
    }
    const itemPrice = Number(prompt("Give me a price for item: ")); /* TODO: Get user input */
    const itemQuantity = Number(prompt("How many of items?")); /* TODO: Get user input */
    // Create an item object and add it to the 'cart' array
    const newItem = {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity,
    };
    cart.push(newItem);
}
// Calculate the total cost using the 'map' and 'reduce' functions
const totalCost = cart
    .map((item) => item.price * item.quantity)
    .reduce((sum, cost) => sum + cost, 0);
// Display the total cost to the user
console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);

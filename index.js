// This is the three constant variables 
const storeName = "Tech hub";
const storeLocation = "Alabang";
const storeCapacity = 100;

console.log("Store Name: ", storeName);
console.log("Store Location: ", storeLocation);

// Variable for product inventory
let name;
let price;
let quantity;

// array for products
let product = [
    {name : "Laptop",price : 18999, quantity : 50},
    {name : "Smartphone",price : 9999, quantity : 100},
    {name : "Tablet",price : 12999, quantity : 80}
]

// Total Value of Inventory
let totalInventoryValue = 0;
for(let products of product){
    totalInventoryValue += products.price * products.quantity
}

console.log("Total Inventory Value: ", totalInventoryValue);

// Total of all products
let totalNumberProducts = 0;
for(let products of product){
    totalNumberProducts += products.quantity
}

console.log("Total Number of Products: ", totalNumberProducts);

// Add quantity of laptops
const addLaptop = 10;

product[0].quantity += addLaptop;

let mostExpensiveProduct = "";
let highestPrice = 0;

// Finding the highest price
for(let products of product){
    if(products.price > highestPrice){
        highestPrice = products.price;
        mostExpensiveProduct = products.name;
    }
}

console.log(" Updated Laptop Quantity: " ,product[0].quantity += addLaptop);
console.log("Most Expensive Product: ", mostExpensiveProduct);
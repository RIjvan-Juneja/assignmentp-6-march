// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of I USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.

// Original object with item prices in USD
const items = [
    { item: "item1", price: 10 },
    { item: "item2", price: 20 },
    { item: "item3", price: 30 }
  ];
  
  // Conversion rate from USD to INR
  const exchangeRate = 80;
  
  // Function to convert prices from USD to INR
  function convertToINR(price) {
    return price * exchangeRate;
  }
  
  // Use map() to create a new object with converted prices in INR
  const itemsINR = items.map(item => {
    return {
      ...item,
      price: convertToINR(item.price)
    };
  });
  
  // Display the original object with USD prices
  console.log("Original object with USD prices:");
  console.log(items);
  
  // Display the new object with INR prices
  console.log("New object with INR prices:");
  console.log(itemsINR);
  
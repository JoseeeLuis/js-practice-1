// function calculateSalePrice(cost, discount) {
//     let cuotas= cost/12;

//     return {
//         discountMessage: `Descuento: el descuento es de ${discount}%
//     Precio con descuento: $${cost - (cost * discount) / 100}`,
//         installmentMessage: `Hasta 12 cuotas sin descuento de: $${
//         cuotas.toFixed(2)
//         } por mes`,
//     };
// }

// function createProduct(itemNumber, itemName, itemCost) {
//     return {
//         itemNumber: itemNumber,
//         itemName: itemName,
//         itemCost: itemCost,
//     };
// }

// function addDescriptionAndSaleInfo(product, itemDescription) {
//     const saleInfo = calculateSalePrice(product.itemCost, 10);

//     product.itemDescription = itemDescription;
//     product.discountInfo = saleInfo.discountMessage;
//     product.installmentInfo = saleInfo.installmentMessage;

//     return product;
// }
// let items = [ `Mackbook`, `Iphone-14`,`apple-watch`]
// let cost = [ 5000, 2230,645]
// items.push(`Iphone-13`)
// items.push(`oculus`)
// cost.unshift(2000)
// cost.unshift(50000)

// const product1 = createProduct(1, items[0], cost[0]);

// const productWithDescription1 = addDescriptionAndSaleInfo(product1,"Esta MacBook tiene 16 GB de RAM. Es la mas nueva del mercado tiene un pentium de ultima generacion ");

// console.log(productWithDescription1);

// const product2 = createProduct(2, items[1], cost[1]);
// const productWithDescription2 = addDescriptionAndSaleInfo(product2,"Este iPhone tiene una cámara avanzada. la camara cuenta con 10px de gran angular y 1px de macro");
// console.log(productWithDescription2);

// console.log(items)
// console.log(cost)

// const admin = {
//   email: 'admin',
//   password: '1234'
// };

// let items = [];

// function createItem(title, description, cost, img) {
//   let item = {
//     title,
//     description,
//     cost,
//     img
//   };

//   return item;
// }

// function verifyUser() {
//   const promptUser = prompt('Your user');
//   const promptPassword = prompt('Your password');

//   return admin.email === promptUser && admin.password === promptPassword;
// }

// function subirItem(item, array) {
//   array.push(item);
//   return array;
// }

// function addItemAfterAuth() {
//   let maxAttempts = 3;

//   for (let attempt = 1; attempt <= maxAttempts; attempt++) {
//     if (verifyUser()) {
//       const newItem = createItem('mate', 'sarasa', 132, 'img/kaka');
//       subirItem(newItem, items);
//       console.log('Item added:', newItem);
//       break;
//     } else {
//       if (attempt < maxAttempts) {
//         console.log('Authentication failed. You have ' + (maxAttempts - attempt) + ' attempts remaining.');
//       } else {
//         console.log('Authentication failed. No attempts remaining.');
//       }
//     }
//   }
// }

// addItemAfterAuth();

const secretNumber= 1;
let userNumber = Number(prompt( `insert a number`))
attempts=3
do{
  if(userNumber===secretNumber){
    console.log(`You win`)
    break
  }
  else{
    attempts--
    // alert(`try again`)
    // alert(`You have ${attempts} attempts`)
    userNumber = Number(prompt(`insert other number`))
    console.log(attempts)
  }

} while(attempts > 0 && userNumber != secretNumber);
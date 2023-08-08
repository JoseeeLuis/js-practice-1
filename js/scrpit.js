function calculateSalePrice(cost, discount) {
    let cuotas= cost/12;

    return {
        discountMessage: `Descuento: el descuento es de ${discount}%
    Precio con descuento: $${cost - (cost * discount) / 100}`,
        installmentMessage: `Hasta 12 cuotas sin descuento de: $${
        cuotas.toFixed(2)
        } por mes`,
    };
}

function createProduct(itemNumber, itemName, itemCost) {
    return {
        itemNumber: itemNumber,
        itemName: itemName,
        itemCost: itemCost,
    };
}

function addDescriptionAndSaleInfo(product, itemDescription) {
    const saleInfo = calculateSalePrice(product.itemCost, 10); 

    product.itemDescription = itemDescription;
    product.discountInfo = saleInfo.discountMessage;
    product.installmentInfo = saleInfo.installmentMessage;

    return product;
}
let items = [ `Mackbook`, `Iphone-14`,`apple-watch`]
let cost = [ 5000, 2230,645]
items.push(`Iphone-13`)
items.push(`oculus`)
cost.unshift(2000)
cost.unshift(50000)

const product1 = createProduct(1, items[0], cost[0]);

const productWithDescription1 = addDescriptionAndSaleInfo(product1,"Esta MacBook tiene 16 GB de RAM. Es la mas nueva del mercado tiene un pentium de ultima generacion ");

console.log(productWithDescription1);

const product2 = createProduct(2, items[1], cost[1]);
const productWithDescription2 = addDescriptionAndSaleInfo(product2,"Este iPhone tiene una cámara avanzada. la camara cuenta con 10px de gran angular y 1px de macro");
console.log(productWithDescription2);

console.log(items)
console.log(cost)   


function calculateSalePrice(cost, discount) {
    return {
        discountMessage: `Descuento: el descuento es de ${discount}%
    Precio con descuento: $${cost - (cost * discount) / 100}`,
        installmentMessage: `Hasta 12 cuotas sin descuento de: $${
        cost / 12
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
  const saleInfo = calculateSalePrice(product.itemCost, 10); // Ejemplo de descuento del 10%

    product.itemDescription = itemDescription;
    product.discountInfo = saleInfo.discountMessage;
    product.installmentInfo = saleInfo.installmentMessage;

    return product;
}
let productos = [ `Mackbook`, `Iphone-14`,`apple-watch`]
let productos2 = [`cookies`, `bread`, `milk`] 

const product1 = createProduct(1, "MacBook", 600);

const productWithDescription1 = addDescriptionAndSaleInfo(product1,"Esta MacBook tiene 16 GB de RAM. Es la mas nueva del mercado tiene un pentium de ultima generacion ");

console.log(productWithDescription1);

const product2 = createProduct(2, "iPhone", 800);
const productWithDescription2 = addDescriptionAndSaleInfo(product2,"Este iPhone tiene una cámara avanzada. la camara cuenta con 10px de gran angular y 1px de macro");
console.log(productWithDescription2);

productos.push(`Iphone-13`)
productos.push(`oculus`)
productos2.unshift(`coffe`)
productos2.unshift(`suggar`)

console.log(productos)
console.log(productos2)
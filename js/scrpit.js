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
    const saleInfo = calculateSalePrice(itemCost, 10);
    const productInfo = `Producto ${itemNumber}
    Título: ${itemName}
    Precio: $${itemCost}
    ${saleInfo.discountMessage}
    ${saleInfo.installmentMessage}
    `;
    return productInfo;
}

const productDescription = "Esta MacBook tiene 16 GB de RAM.";
const product1 = createProduct(1, "MacBook", 600);
console.log(product1);
const product2 = createProduct(2, "iPhone", 800);
console.log(product2);

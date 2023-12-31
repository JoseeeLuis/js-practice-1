const products = [
    {
        id: 1,
        title: "Macbook Pro M1 8GB",
        price: 1500
    },
    {
        id: 2,
        title: "Macbook Pro M1 16GB",
        price: 1700
    },
    {
        id: 3,
        title: "Macbook Air M1 13'",
        price: 1300
    },
    {
        id: 4,
        title: "Macbook Air M2 13'",
        price: 1450
    },
    {
        id: 5,
        title: "iMac M2 24'",
        price: 2000
    },
];

// Buscar el producto con id=2
function productWithId2() {
    const idSolicitado = 2;
    const product2 = products.find(product => product.id === idSolicitado);

    if (product2) {
        console.log("Producto encontrado:", product2);
    } else {
        console.log("Producto no encontrado con ID:", idSolicitado);
    }
}
const result1 = productWithId2();
console.log(result1);

console.log("separador");

// Productos con precio mayor a 1500
function expensiveProducts() {

    expensiveProducts= products.filter(product=>product.price>1500);    
    return expensiveProducts;
}

const result2 = expensiveProducts();
console.log(result2);
console.log("yeiiii")

// Mostrar por consola el precio de la cuota de cada producto (12 cuotas)
function showProductInstallments() {
    // for (const product of products) {
    //     const installments = (product.price / 12).toFixed(2);
    //     console.log(`The price of product ${product.title}in 12 installments is ${installments}`);
    // }
    let cuotas=products.map(product=> ({
        title:product.title,
        installmentPrice: (product.price/12).toFixed(2)
    }))

    return cuotas
}

console.log(showProductInstallments());

// Productos que sean "Macbook"
function searchMacbooks() {
    // const macbooksResults = [];

    // for (const product of products) {
    //     if (product.title.includes("Macbook")) {
    //         macbooksResults.push(product);   
    //     }
    // }

    // return macbooksResults;
    let macbooks= products.filter(product=>product.title.includes("Macbook"))
    return macbooks
}

const result3 = searchMacbooks();
console.log(result3);

function thereAreExpensiveProducts() {
    return products.some(product => product.price >= 2000);
}
console.log(thereAreExpensiveProducts())

function ProductsWithDisccount(){
    let ProductsWithDisccount= products.map(product=>product.price*0.9)
    return ProductsWithDisccount
}
console.log(ProductsWithDisccount())


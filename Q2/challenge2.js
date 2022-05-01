const item = [
    { name: 'Bike', price: 100 }, { name: 'TV', price: 200 }, { name: 'Album', price: 10 }, { name: 'Book', price: 5 }, { name: 'Phone', price: 500 }, { name: 'Computer', price: 1000 },
];
let letter = '==='.repeat(15);

/* 1.1 . Filter and show the product that will be bought when you don't have much money I mean Cheap one, let's assume that maximum price is $100 */

const cheapItems = item.filter((ite) => {
    return ite.price <= 100;
});
console.log(`${letter}\nCheap Items`, cheapItems);

/* 2. Filter and show the product that will be expensive in the array, let's assume that minimum price is $100 */

const expensiveItems = item.filter((ite) => {
    return ite.price >= 100;
});
console.log(`${letter}\n Expensive items: `, expensiveItems);

/* 3 . Calculate the full price of all product combined */

const fullPrice = item.reduce((currentSum, ite) => {
    return ite.price + currentSum;
}, 0);
console.log(`${letter}\n Full price of all products = `, fullPrice);

/* 4 . Calculate the full price of all product combined and remove product that are under the 10 dollar */
const newFullPrice = (array, price) => {
    const pricyItem = array.filter(ite => { return ite.price > price })
    console.log(`${letter}\nFull Price without price under $10 =`,pricyItem.reduce((currentSum, ite) => { return ite.price + currentSum }, 0));
}
newFullPrice(item, 10);

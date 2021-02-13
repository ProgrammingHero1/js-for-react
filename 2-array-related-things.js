const numbers = [2, 4, 5, 7, 5];
const friends = ['Rafiq', 'Jabbar', 'Barkat'];
const products = [
    {id: 1, name: 'laptop', price: 500},
    {id: 2, name: 'phone', price: 100},
    {id: 3, name: 'watch', price: 20},
    {id: 4, name: 'tablet', price: 80}
];

// map
const names = products.map(product => product.name);
const prices = products.map(pd => pd.price);
const prices2 = products.map (pd=> {
    // do some work
    return pd.price;
})
// console.log(prices2);

//forEach
// products.forEach(product => console.log(product.name));

// filter
const cheaper = products.filter(pd => pd.price < 100);
// console.log(cheaper);
// remove an item using filter
const remaining = products.filter(pd => pd.id != 3);
// console.log(remaining);

// find
const hasWatch = products.find(pd=> pd.name === 'watch');
console.log(hasWatch);

// reduce

// includes

// push

// pop

//length

//indexOf

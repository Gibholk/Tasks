// 1
console.log("Doubled numbers:", [1, 2, 3, 4, 5].map(number => number * 2));


// 2
const numbers2 = [3, 1, 4, 1, 5, 9, 2, 6];
numbers2.sort((a, b) => a - b);
console.log("Sorted numbers:", numbers2);


// 3
console.log("Reversed strings:", ['hello', 'world'].reverse());


// 4
console.log("Fruits array:", 'apple,banana,cherry'.split(','));


// 5
console.log("Joined string:", ['hello', 'world'].join(' '));


// 6
console.log("Product of numbers:", [1, 2, 3, 4, 5].reduce((a, c) => a * c, 1));


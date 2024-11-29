// 1

let numbers1 = [1, 2, 3, 4, 5];
let doubledNumbers = [];

for (let i = 0; i < numbers1.length; i++) {
  doubledNumbers.push(numbers1[i] * 2);
}

console.log("Doubled numbers:", doubledNumbers);



// 2

let numbers2 = [3, 1, 4, 1, 5, 9, 2, 6];
numbers2.sort(function(a, b) {
    return a - b;
});

console.log("Sorted numbers:", numbers2);


// 3

let strings = ['hello', 'world'];
let reversedStrings = [];

for (let i = strings.length - 1; i >= 0; i--) {
  reversedStrings.push(strings[i]);
}

console.log("Reversed strings:", reversedStrings);


// 4

let fruitsString = 'apple,banana,cherry';
let fruitsArray = fruitsString.split(',');

console.log("Fruits array:", fruitsArray);


// 5

let words = ['hello', 'world'];
let joinedString = words.join(' ');

console.log("Joined string:", joinedString);


// 6

let numbers3 = [1, 2, 3, 4, 5];
let product = 1;

for (let i = 0; i < numbers3.length; i++) {
  product = product * numbers3[i]; 
}

console.log("Product of numbers:", product);


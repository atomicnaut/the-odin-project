// Arrays

// declaration
let fruits = ["apple", "orange", "banana"];
console.log(fruits[0], fruits.length, fruits.at(-1));

// methods
// push
fruits.push("grape");
console.log(fruits);

// pop
fruits.pop();
console.log(fruits);

// unshift
fruits.unshift("grape");
console.log(fruits);

// shift
fruits.shift();
console.log(fruits);

// join
console.log(fruits.join(" - "));

// Loops

// for loops
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// for of loops
for (const fruit of fruits) {
	console.log(fruit);
}

// while loop
let i = 0;
while (i < 3) {
	console.log(i);
	i++;
}

// do while loop
let x = 0;
do {
	console.log(x);
	x++;
} while (x < 3);

// continue
for (let i = 0; i < 10; i++) {
	// if true, skip the remaining part of the body
	if (i % 2 == 0) continue;
	console.log(i);
}

// Assignment
console.log(`Assignment Starts Here`);

//

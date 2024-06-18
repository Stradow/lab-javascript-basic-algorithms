// Iteration 1: Names and Input

let hacker1; 
hacker1 = 'Kostas';
let hacker2;
hacker2 = 'Joon';

console.log(`The drivers name is ${hacker1}`);
console.log(`The navigators name is ${hacker2}`); 

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) { 
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) { 
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, You both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loops
//Capital name
let driverName = "";
for (let i = 0; < hacker1.length; i++) { 
    reservedName +=hacker1[i].toUpperCase() + " ";
}

console.log(driverName.);

//Reverse name
let navigatorReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) { 
    navigatorReverse += hacker2[i];
}
console.log(navigatorReverse);

//string order
if (hacker1 < hacker2) { 
    console.log("the drivers name goes first");
} else if ( hacker1 > hacker2) { 
    console.log("Yo, the navigator goes first definitely");
} else { 
    console.log("What?! You both have the same name?");
}

//Bonus 1
// generate lorem text

let longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

console.log(longText);

//count text
let wordCount = longText.length;
console.log(wordCount);

// count et


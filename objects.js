const items = {
  first: new Date(),
  second: 2,
  third: "test",
};

// items.map(item => {}): Error > TypeError: items.map is not a function
//items.forEach(item => {}): Error >TypeError: items.forEach is not a function
//for (const item of items) {}: Error >ypeError: items are not iterable

const user = {
  name: "John Doe",

  email: "john.doe@example.com",

  age: 25,

  dob: "08/02/1989",

  active: true,
};

// iterate over the user object

for (const key in user) {
  // console.log(`${key}: ${user[key]}`);
}

// name: John Doe

// email: john.doe@example.com

// age: 25

// dob: 08/02/1989

// active: true

for (const key in user) {
  if (user.hasOwnProperty(key)) {
    /*
    console.log(`${key}: ${user[key]}`);
name: John Doe
email: john.doe@example.com
age: 25
dob: 08/02/1989
active: true

      */
  }
}

const courses = {
  java: 10,

  javascript: 55,

  nodejs: 5,

  php: 15,
};

// convert object to key's array

const keys = Object.keys(courses);

// print all keys

// console.log(keys);
// [ 'java', 'javascript', 'nodejs', 'php' ]

// [ 'java', 'javascript', 'nodejs', 'php' ]

// iterate over object

keys.forEach((key, index) => {
  console.log(`${key}: ${courses[key]}`);
});

// java: 10

// javascript: 55

// nodejs: 5

// php: 15

const animals = {
  tiger: 1,

  cat: 2,

  monkey: 3,

  elephant: 4,
};

// iterate over object values

Object.values(animals).forEach((val) => console.log(val));

// 1
// 2
// 3
// 4

const entries = Object.entries(animals);
console.log(entries);

// [ [ 'tiger', 1 ],

//   [ 'cat', 2 ],

//   [ 'monkey', 3 ],

//   [ 'elephant', 4 ] ]

// `for...of` loop
for (const [key, value] of Object.entries(animals)) {
  console.log(`${key}: ${value}`);
}

// `forEach()` method

Object.entries(animals).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

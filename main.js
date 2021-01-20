console.log("hello!");

const students = ['Katy', 'Jackie', 'Sean', 'Nathan'];
// console.log(students.length);

// ****** ACCESSING ITEMS IN ARRAY

// console.log(students[1]); // Jackie
// console.log(students[students.length - 1]); // Nathan

students[0] = 'Matthew';
// console.log(students);

const valuePrinter = (array, index) => {
  return array[index];
}

console.log(valuePrinter(students, 2));

// Write a function that takes an array of something and tells you if the name 'Greg' is in that array
const friends = ['Greg', 'Greeeeg', 'Greeeeeeeeg'];

const findName = (arr) => {
  if (arr.indexOf('Greg') !== -1) {
    return 'Greg exists!';
  } else {
    return 'Greg is not your friend!';
  }
}

console.log(findName(students));
console.log(findName(friends));


// Another method that my classmates were working on

const isGregHere = (array) => {
  return array.includes('Greg');
}

console.log(isGregHere(students));

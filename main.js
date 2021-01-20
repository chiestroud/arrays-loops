// for (let i = 0; i <= 15; i++) {
//   console.log(i);
// } 

// const functionForTad = () => {
//   for (let i = 0; i <=15; i++) {
//     console.log(i);
//   }
// }

// functionForTad();

// *** ARRAYS WITH LOOPS

// const ec14Instructors = ['Aja', 'Trinity', 'Dr. T', 'Discussion Tickets'];
// for (let i = 0; i < ec14Instructors.length; i++) {
//   console.log(ec14Instructors[i]);
// }

// *********** ARRAYS, LOOPS, FUNCTIONS

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const colorLoop = () => {
  let domString = '';

  for (let i = 0; i < colors.length; i++) {
    domString += `<h1>${colors[i]}</h1>`
  }
  // loops keep going and going until it breaks

  console.log(domString);
}

// colorLoop();

const instructors = [
  {first: 'Trinity', last: 'Christiana'},
  {first: 'Aja', last: 'Washington'},
  {first: 'Teresa', last: 'Vasquez'}
];

const nameLoop = () => {
  let domString = '';

  for (let i = 0; i < instructors.length; i++) {
    domString += `<h1>${instructors[i].first} ${instructors[i].last}</h1>`
  }

  console.log(domString);
}

nameLoop();

/******************
 * YOUR CODE HERE *
 ******************/
function colorCombinator(color) {
if ('red', 'yellow' ) {
   console.log('orange');
}

if ('yellow', 'red') {
   console.log('orange');
}

if ('red', 'blue') {
   console.log('purple');
}

if ('blue', 'red') {
   console.log('purple');
}

if ('yellow', 'blue') {
   console.log('green');
}

if ('blue', 'yellow') {
   console.log('green');
}
}
// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;

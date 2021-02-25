/******************
 * YOUR CODE HERE *
 ******************/
if ('red', 'yellow' ) {
  return console.log('orange');
}

if ('yellow', 'red') {
  return console.log('orange');
}

if ('red', 'blue') {
  return console.log('purple');
}

if ('blue', 'red') {
  return console.log('purple');
}

if ('yellow', 'blue') {
  return console.log('green');
}

if ('blue', 'yellow') {
  return console.log('green');
}

// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;

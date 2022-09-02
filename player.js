const net = require("net");
const { connect } = require('./client')

connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  // your code here
  if ( key === '\u0003' ) {
    // ctrl-c ( end of text )
    process.exit();
  }  
};
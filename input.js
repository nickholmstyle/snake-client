const { stdin } = require("process");
const { MOVE_KEY_UP } = require("./constants");

// const net = require("net");
let connection;


const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {

  // your code here
  if ( key === '\u0003' ) {
    process.exit();
  } else if ( key === 'w') {
    console.log('Move: up');
    MOVE_KEY_UP;
  } else if ( key === 'd') {
    console.log('Move: right');
    connection.write('Move: right')
  } else if ( key === 's') {
    console.log('Move: down');
    connection.write('Move: down')
  } else if ( key === 'a') {
    console.log('Move: left');
    connection.write('Move: left');
  } 
  else if ( key === '1') {
    console.log('Say: Sszz');
    connection.write('Say: Sszz');
  }
  else if ( key === '2') {
    console.log('Say: hsss');
    connection.write('Say: hsss');
  } else if ( key === '3') {
    console.log('Say: itMe');
    connection.write('Say: itMe');
  }  
}
module.exports = {setupInput};
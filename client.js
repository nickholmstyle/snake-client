

const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // conn.write("Name: NHH");
    // conn.write("Move: up");
    setInterval(() => {
      conn.write("Move: up");
    }, 500);
  });
  
  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  return conn;
};



module.exports = {connect};



// const net = require("net");

// const connect = function () {
//   console.log("Connecting ...");
//   const conn = net.createConnection({
//     host: 'localhost',
//     port: 50541
//   });
//   conn.on("connect", () => {
//     console.log('Ready to get snekked??');
//     conn.write('Name: NHH');
//     conn.write('Move: up');
//     conn.write('Move: right');
//     conn.write('Move: down');
//   })
//   conn.on("data", () => {
//   console.log("you ded cuz you idled:");
//   })
  
  
//   // interpret incoming data as text
//   conn.setEncoding("utf8");
//   return conn;
// };

// module.exports = { 
//   connect
// };
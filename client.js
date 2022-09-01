const net = require("net");

const connect = function () {
  console.log("Connecting ...");
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.on("connect", () => {
    console.log('Ready to get snekked??');
    conn.write('Name: NHH')
  })
  conn.on("data", () => {
  console.log("you ded cuz you idled:");
  })
  
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

module.exports = { 
  connect
};
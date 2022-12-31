const WebSocket = require("ws");
const wsServer = new WebSocket.Server({
  port: 5000,
});
const fs = require("fs");
console.log("WSS server code started.");
/**
This is by gvbvdxx,
this server is for gvbvdxx game maker 2 community,
do not hack or modify. gvbvdxx is only allowed to modify.
*/
wsServer.on("connection", function (socket) {
  // Some feedback on the console
  console.clear();

  // Attach some behavior to the incoming socket
  socket.on("message", function (msg) {
    // socket.send("Take this back: " + msg);
    try {
      var message = JSON.parse(msg);
    } catch (e) {}
    if (message.command == "savefile") {
      try {
        try{
          fs.unlinkSync(message.file);
        }catch(e){} 
        console.log("Save File Request From WSS Server.");
        fs.writeFileSync(message.file, message.contents, { encoding: "UTF-8" });
        console.log("Saved File.");
        socket.send(
          JSON.stringify({
            res: "Done.",
          })
        );
        
      } catch (e) {
        console.log("Failed To Save.");
        socket.send(
         JSON.stringify({
           res: "Done.",
          error:true
         })
        );
      }
    }
    if (message.command == "getfile") {
      try {
        console.log("Get File Request From WSS Server.");
        socket.send(
          JSON.stringify({
            data: fs.readFileSync(message.file, { encoding: "UTF-8" }),
            res: "Done.",
          })
        );
        console.log("Finished Get.");
      } catch (e) {
        console.log("Failed To Get File.");
        socket.send(
          JSON.stringify({
          res: "Done.",
           error:true
          })
        );
      }
    }
	if (message.command == "log") {
		try{
			console.log(message.log);
		}catch(e){}
    }
    if (message.command == "removeFile") {
      try {
        console.log("Remove File Request From WSS Server.");
        socket.send(
          JSON.stringify({
            data: fs.unlinkSync(message.file),
            res: "Done.",
          })
        );
        console.log("Removed File.");
      } catch (e) {
        console.log("Failed To Removed File.");
        socket.send(
          JSON.stringify({
          res: "Done.",
           error:true
          })
        );
        
      }
    }
    // Broadcast that message to all connected clients
    /*wsServer.clients.forEach(function (client) {
      client.send(msg);
    });*/
  });

  socket.on("close", function () {});
});
console.log("WSS server is open.");
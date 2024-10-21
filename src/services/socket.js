const socket = new WebSocket("ws://localhost:8081");

socket.onopen = () => {
  console.log("Connected to the server");
  socket.send("Hello from the client!");
};

socket.onclose = () => {
  console.log("Disconnected from the server");
};

socket.onerror = (error) => {
  console.log("Error", error);
};

export default socket;

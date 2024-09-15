class WebSocketService {
  static connect(onMessage: (event: MessageEvent) => void) {
    const socket = new WebSocket("ws://localhost:5000");

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    socket.onmessage = (event) => {
      onMessage(event);
    };

    socket.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };
  }
}

export default WebSocketService;

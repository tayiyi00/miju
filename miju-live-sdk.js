class MijuLiveSDK {
  constructor(serverUrl) {
    this.serverUrl = serverUrl;
    this.socket = null;
  }

  connect() {
    this.socket = new WebSocket(this.serverUrl);

    this.socket.onopen = () => {
      console.log("Connected to Miju Live server");
    };

    this.socket.onmessage = (event) => {
      console.log("Message:", event.data);
    };

    this.socket.onclose = () => {
      console.log("Disconnected");
    };
  }

  joinRoom(roomId, user) {
    this.socket.send(JSON.stringify({
      type: "join",
      roomId: roomId,
      user: user
    }));
  }

  sendMessage(message) {
    this.socket.send(JSON.stringify({
      type: "chat",
      message: message
    }));
  }
}

if (typeof module !== "undefined") {
  module.exports = MijuLiveSDK;
}

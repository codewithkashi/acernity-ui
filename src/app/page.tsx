"use client";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

function App() {
  const socket = io("http://localhost:4000");
  const [messages, setMessages] = useState([]);
  const userId = "user123";

  useEffect(() => {
    socket.emit("join", userId);
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, [userId]);

  const sendMessage = (message) => {
    socket.emit("message", { userId: "user123", message });
  };

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
      <button onClick={() => sendMessage("Hello!")}>Send Message</button>
    </div>
  );
}

export default App;

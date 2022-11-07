import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket;
const ServerTest = () => {
  useEffect(() => {
    async function socketInit() {
      socket = io("http://localhost:3000");

      socket.on("connect", () => {
        console.log("Connected, connection id is ", socket.id);
      });

      socket.on("update-input", (msg) => {
        console.log("server just said holy");
      });
    }

    socketInit();

    return () => {};
  }, []);

  return (
    <button
      onClick={() => {
        socket.emit("input-change", "hi");
      }}
    >
      ServerTest
    </button>
  );
};

export default ServerTest;

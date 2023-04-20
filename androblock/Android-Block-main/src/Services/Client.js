//import { useCallback } from "react";
import { WebSocket } from "ws";

//var port = parseInt(setport, 10);



export function connec(name , number) {
  const ws = new WebSocket('ws://localhost:0026');
  console.log("aqui tamo");

  ws.on('message', (data) => {
    if (data !== undefined && data !== null) {
      alert(' el dispositivo respondio correctamente');
      console.log("hola")
      ws.send('el usuario: ' + name + ',  se ha conectado en el puerto: 0026');
    }
    else {
      alert(" el dispositivo no ha respondido revise los datos ingresado");
    }
  });
}

export function messages() {
  const ws = new WebSocket('ws://localhost:0026');
  ws.on('connection', (ws) => {
    ws.send('klk te habla el servidor! 👌');
  });
}
export function closeconnection() {

}

/*
export function conectdevice() {

}



export function blockdevice() {
  io.on("connection", (Socket) => {
    io.emit("send the block command");
  })
}
*/

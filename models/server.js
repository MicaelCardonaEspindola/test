const express = require('express');
const httpServer = require('http');
const socketio = require('socket.io');
const path = require('path');
const cors= require('cors');
const Sockets = require('./sockets');
class Server{

 constructor(){
  this.app=express();
  this.port=process.env.PORT;
  this.server=httpServer.createServer(this.app);
  this.io = socketio(this.server,{ /*configuraciones*/});
 }
  
 middlewares(){
  this.app.use(express.static( path.resolve(__dirname,'../public') ));
  //Cors
  this.app.use(cors());
 }

 configurarSockets(){
  new Sockets(this.io);
 }

 execute(){

  //inicializar middlewares
  this.middlewares();
  //inicializar sockets
  this.configurarSockets();
  //inicializar Server
  this.server.listen(this.port, () => {
    console.log('Servidor corriendo en el puerto 8080');
  });
 }

}

module.exports=Server;
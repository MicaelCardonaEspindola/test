

class Sockets {
 constructor(io){
 this.io=io;
 this.socketsEvent();

}

socketsEvent(){

  this.io.on('connection', client => {
    client.on('mensaje-to-server', (data)=>{
   
       this.io.emit('mensaje-from-server', data)
      })
  
  });
}

}

module.exports=Sockets;
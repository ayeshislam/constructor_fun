function Iphone3(ASIN,color,display,camera,bluetooth){


  this.ASIN=ASIN;
  this.color=color;
  this.display=display;
  this.camera=camera;
  this.bluetooth=bluetooth;

  this.dial=function(){
    console.log("tring.. tring...");
  }

  this.sendMessage=function(){
    console.log("Sending message...");
  }

  this.cameraClick=function(){
    console.log("Camera clicked");
  }

  this.connectBluetooth=function(){
    console.log("Bluetooth connected succesfully...");
  }
}

let i3={};

Iphone3.call(i3,"B09X67JBQV","Gray", 7.8, "2.0 MP", "Bluetooth 5.1");

console.log(i3.ASIN); 
console.log(i3.color); 
console.log(i3.display); 
console.log(i3.camera); 
console.log(i3.bluetooth); 


console.log(i3.dial()); 
console.log(i3.sendMessage());
console.log(i3.cameraClick()); 
console.log(i3.connectBluetooth());



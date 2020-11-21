//if loop
var x=1,y=2;
if(x===1){
    console.log("x=1");
}
else{
    console.log("y=",y);
}

//for loop

for(var i=0;i<5;i++){
    console.log(i);
}

//while loop

var i=5;
while(i>=0){
    console.log(i);
    i--;
}

//switch statement
var exp="1";
switch(exp) {
    case "1":
        console.log("Hello");
      // code block
      break;
    case 2:
        console.log("World");
      // code block
      break;
    default:
        console.log("Hello World");
      // code block
  }
var x=function(j){
    this.j=j;//this is a constructor
}
//x created from function and function is created from object

x.prototype.getJ=function(){
    return this.j;
}


var x1=new x(10);
var x2=new x(5);
//x1 and x2 are instances of x which means they are actually distinct objects and they inherit all properties and methods from x;
//if getJ() was written in x then all objects created from x will have getJ function in them which is a repetition so I have defined it
//in prototype this only means that x1 and x2 does not have their own methods, if we call x1 it looks up in its prototype chain and see if it
//can find the desired function


console.log(x1.getJ());
console.log(x2.getJ());



//base class

var Job=function(){
    this.pays=true;
}

Job.prototype.print=function(){
    console.log(this.pays?"Please Hire me":"No Thank You.");
}
 var TJob=function(title,pays){
     Job.call(this);// used to make Job as the base class and inherits all methods and functions defined in Job
     this.title=title;
     this.pays=pays;
 }

//Object.prototype.print=function(){
//  console.log("I am executing from master object");
//
//}
 TJob.prototype=Object.create(Job.prototype);//used to inherit from Job.prototype
 TJob.prototype.constructor=TJob;

 TJob.prototype.print=function(){
     console.log(this.pays?this.title+' please hire me':'No thank you');
 }


 var sde1=new TJob("JavaScript Developer",true);
 var sde2=new TJob("C++ Developer",false);


 console.log(sde1.print());
 console.log(sde2.print());

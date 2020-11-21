class Animal{
    constructor(type,legs){
        this.type=type;
        this.legs=legs;
    }
    makenoise=(sound="loud")=>{
        console.log(sound)
    }
    //static functions dont require any instance to be created
    static return10(){
        return 10;
    }
    //JavaScript classes can have getter and setter functions. 
    //Getters is a method that lets us get some data from a class. 
    //Setters are methods that gives us the ability to set some fields of the class.
}
class Cat extends Animal{
    makenoise=(sound="meow")=>{
        console.log(sound)
    }
}
let cat=new Cat('cat',4);
cat.makenoise();
console.log(cat.type);



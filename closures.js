//Simple closure
var passed=3;

var addTo=function(){
    var inner=2;
    return passed+inner;
}

console.log(addTo());

var passed=4;

console.log(addTo());

var addto=function(passed){

    var add=function(inner){
        return passed+inner;
    }

    return add;

}

var addthree=new addto(3);
var addfour=new addto(4);


console.log(addthree(1));
console.log(addfour(1));
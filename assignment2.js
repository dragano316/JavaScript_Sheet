class Person{
    constructor(name,age,salary,sex){
        this.name=name;
        this.age=age;
        this.salary=salary;
        this.sex=sex;
    }

    static comparator(a, b, comp){
        if (a[comp] < b[comp]) {
          return -1;
        }
        if (a[comp] > b[comp]) {
          return 1;
        }
        return 0;
      };
      
    static quickSort(
        unsortedArray,
        comparator,
        comp,
        method
      ){
        const sortedArray = [ ...unsortedArray ];//new array to be returned
      
        const recurSort = (start, end) => {//sorting subarrays
      
          if (end - start < 1) {
            return;
          }
      
          const pivotValue = sortedArray[end];
          let splitIndex = start;
          for (let i = start; i < end; i++) {
            const sort = comparator(sortedArray[i], pivotValue,comp);
      
            if (sort === -1) {
      

              if (splitIndex !== i) {
                const temp = sortedArray[splitIndex];
                sortedArray[splitIndex] = sortedArray[i];
                sortedArray[i] = temp;
              }
              splitIndex++;
            }

          }
      
          sortedArray[end] = sortedArray[splitIndex];
          sortedArray[splitIndex] = pivotValue;
      
          recurSort(start, splitIndex - 1);
          recurSort(splitIndex + 1, end);
        };
      
        recurSort(0, unsortedArray.length - 1);
        if(method==="desc"){
            return sortedArray.reverse();
        }
        return sortedArray;
      };


    // static compareValues(key, order = 'asc') {
    //     return function innerSort(a, b) {
    //       if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
    //         // property doesn't exist on either object
    //         return 0;
    //       }
      
    //       const varA = (typeof a[key] === 'string')
    //         ? a[key].toUpperCase() : a[key];
    //       const varB = (typeof b[key] === 'string')
    //         ? b[key].toUpperCase() : b[key];
      
    //       let comparison = 0;
    //       if (varA > varB) {
    //         comparison = 1;
    //       } else if (varA < varB) {
    //         comparison = -1;
    //       }
    //       return (
    //         (order === 'desc') ? (comparison * -1) : comparison
    //       );
    //     };
    //   }
    }

let p1=new Person("Rahul",28,10000,"M");
let p2=new Person("Rohit",30,40000,"M");
let p3=new Person("Kunal",30,50000,"M");
let p4=new Person("Lakshya",24,50000,"M");
let p5=new Person("Tarun",50,70000,"M");
let p6=new Person("Vivek",28,30000,"M");
let p7=new Person("Vaibhav",45,25000,"M");
let p8=new Person("Ankit",23,10000,"M");
let p9=new Person("Mark",28,100000,"M");
let p10=new Person("Steve",37,45000,"M");


const array=[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10];

// console.log(array.sort(Person.compareValues("salary", 'desc')));

console.log(Person.quickSort(array,Person.comparator,"name","desc"));

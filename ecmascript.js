/*
let a=30;
function xyz(){
  let a=40;
  console.log(a);
}
xyz();
console.log(a);
*/
/*
const a={
    "name":"niki",
    "age":22
}
a.email="xns@gmail.com";
console.log(a);
*/
/*
var name="niki";
var age=28;
console.log("Hi "+name+" you are "+age+" years old");
*/

class Users{
    constructor(name,age){
        this.name=name;
        this.age=22;
    }
    getName(){
        this.email="nikki@gmail.com";
        return this.name;
    }
    getAge(){
        return this.age;   
     }
     getEmail(){
         return this.email;
     }
}
var user = new Users("nikki",22);
console.log(user.getName());
console.log(user.getEmail());
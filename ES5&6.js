

//"use strict"
//a=5;

//console.log(a);

// var fname = "sayana"
// console.log("fname.length");
// console.log(typeof(fname));

// var data = " hi, this  is a txt message"
// console.log(data.length);
// console.log(data.indexOf('txt'))
// console.log(data.replace("txt","text"));
//console.log(data);
//console.log(data.split(','));
// console.log(data.trim());
// console.log(data.trimStart());









// let fruits = ["apple","Mango","Orange","Grapes"];
// console.log(Array.isArray(fruits));
// //foreach
// fruits.forEach(function(item){
//     console.log(item)
// });
// let numb = [20,30,58,65]
// numb.forEach(function(item,ind){
// numb[ind]=item<50
// })
//console.log(numb)
// var obj1 = JSON.parse('{"name":"sayana","age":10}');
// console.log(obj1);
// var obj2 = JSON.stringify(obj1);
// console.log(obj2);
// function sum(a,b){
//  var s=a+b;
//  console.log(`the sum is ${s}`);
// }
// sum(10,20);
// var add =(c,d)=>{
//     console.log(`the sum is ${c+d}`);

// }
// add(10,8)
// var sub=(a,b)=>{
//     console.log(`the difference is ${a-b}`);

// }
// sub(345,45)

// spread operator
// var a = [12,23,45,66,77,12,34]
// var b =[45,12]
// var c=[...a,...b]//three dot indicates spread operator
// console.log(c);
// var d = [3,4,...a]
// console.log(d);







//array destructuring
var[q,r,s]=[2,3,4];
console.log(r);
var[p,,w]=[2,5,8];
console.log(w);
var[h,,j,...l]=[1,2,3,4,5,6,7]
console.log(l);

console.log('welcome to js')
// alert('hello and welcome');
var a=10;
console.log(a);
var a=9;
console.log(a);//block 1
{
    var a=20;
    console.log(a);    //block2

}
let b=23;
console.log(b);
{
    let b=34;
    console.log(b);
}
console.log(b);
// const
const t=30;
console.log(t);
{
    const t=90;
    console.log(t);
}
console.log(t);
// Data types
var nam='welcome to js';
console.log(typeof(nam));
// number
var count=10;
console.log(typeof(count));
// boolean
var bb=true;
console.log(typeof(bb));
var gtype;
console.log(typeof(gtype));
// array
let arr=['red','blue','white',10]
console.log(arr[1]);
console.log(arr[3])
console.log(arr.length);
arr.push('violet');
console.log(arr);
arr.pop();
console.log(arr);
// javascript objects
let car={
    mileage:100,
    model:'i10',
    color:'red'

}
console.log(car);
console.log(car.model);
console.log(car.mileage);
let person=new Object()
person.gender='male';
person.height=180;
console.log(person);
var a=5
var d=3;
console.log(a+d);
console.log(a-d);
console.log(a/d);
console.log(a*d);
var a=10;
var d=a++;
console.log(b);
console.log(a);
// if else
if (a==b)   {
    console.log('a  equal to d')
} else {
    console.log('a not equal to d')
}
var f=12;
var h=15;
if(f>6||h==15){
    console.log('f is greater than  or equal to h' )
}else{
    console.log('fis greater than h and not equal to h')
}

let l=30;
let m=50;
let n=70;
let o=12;
// console.log(add);
var exp=l+m*(n-o)-7;
console.log(exp)
// functions
function display(name){
    console.log('Hi '+name+' welcome to js');
}
display('navya');//function call
function addition(t,s){
    var result=t+s;
    console.log(result);
}
addition(10,30);
function addition(t,s){
    var result=t+s;
    return result;
}
var result=addition(10,30);
console.log('the sum is '+result);

function subtraction(k,s){
    var result=k-s;
    console.log(result);
}
subtraction(20,10);
function subtraction(k,s){
    var result=k-s;
    return result;
}
var result=subtraction(10,30);
console.log('the sum is '+result);


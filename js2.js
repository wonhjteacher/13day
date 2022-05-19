let num1 = 20 ;
let num2 = 3 ;

console.log(num1%num2)
//단항연산자 

num2 = -num2 ; // -3
num2 = +num2 ; //+(-3)
console.log(typeof num2)

//증감연산자 
let num3 = 10;
console.log(++num3);//11
console.log(++num3);//12
console.log(--num3);//11
console.log(num3++)//11 -> 12
console.log(num3++)//12 -> 13 
console.log(num3)//13  

let a=1;
let b=++a; // 2
let c=a++ + 2 ;

console.log(c)
console.log(a)
console.clear() // 콘솔 삭제 
//대입연산자  
let value1 = 1;
value1 *= 10; // 10  value1 = value * 10 
console.log(value1)
value1 *= 10;
console.log(value1) // 100
value1 %= 10;
console.log(value1) // 0





// headings //
/* sub headings */
//* 2sub headings *//
/** comments  **/
// code 


// console.log('Hello world');


// (2) Values and Variables //


// var myName = 'Mubashir';
// var myAge = '26';
// console.log(myName);
// console.log(myAge);


// (3)  Data types in javaScript //
/* 6 data types */
/*1 undefined */

// var myName = 'Mubashir';
// console.log(myName);
/** we use "typeof" operator to find datatype of that varriable */
// console.log(typeof(myName));

// var myAge = 26 ;
// console.log(myAge);
// console.log(typeof(myAge));

// (4) Expressions and Operators //

// var x = 5;
// var y = 10;

// var sum = x + y ;

// console.log(sum);

/* increment and decrement operator */

// var num = 5;
// var inum = num++;
// console.log(num);
// console.log(inum);

// var num = 5;
// var dnum = num--;
// console.log(num);
// console.log(dnum);

/* comparison operator */

// var x = 5;
// var y = 10;

// console.log(x == y);
// console.log(x > y);
// console.log(x < y);

/* logical operators */ 
//* logical OR, AND, NOT *//

// var x = 5;
// var y = 10;
// console.log((x = y) || (x < y) );
// console.log((x = y) && (x < y) );
// console.log(!((x = y) || (x < y)));

//* string/concatination operatora(+) */

// console.log('mubashir');

// console.log("mubashir" + " ALi");


// var myName = "mubashir";
// console.log(myName + " Ali");

/* swap two numbers */

// var a = 4;
// var b = 7;

// var c = b; 
// b = a;
// a = c;

// console.log(a);
// console.log(b);

/** without using third variable swap two variables */

// var a = 4;
// var b = 7;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a);
// console.log(b);


// 5 Control Statements And Loops //
/* 1 if-else */

// var tomrw = 'rain';
// if(tomrw =='rain'){
//     console.log('take a rain coat');


// }else{
//     console.log('no need');
// }

// var tomrw = 'sunny';
// if(tomrw =='rain'){
//     console.log('take a rain coat');


// }else{
//     console.log('no need to take rain coat');
// }

/* practice time */

// var year = 2000;

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log('the year is leap year');
            
//         } else {
//             console.log('the year is not leap year');
            
//         }
        
//     } else {
//         console.log('the year is leap year');
        
//     }
    
// } else {
//     console.log('is not a leap year');
    
// }

/* practice number is odd or even */

// var num = 5 ;

// if (num % 2 === 0) {
//     console.log('the number is even');
// } else {
//     console.log('not an even number ');
    
// }

/* practice number is odd or even or a prime */

// var num = 7 ;

// if (num % 2 === 0) {
//     console.log('the number is even');
// } else {
//     console.log('not an even number ');
    
// }

// if (num % 2 !== 0) {
//     console.log('the number is odd');
// } else {
//     console.log('not an odd number ');
    
// }

// if (num % 3 !== 0) {
//     console.log('it is prime number');
// } else {
//     console.log('not a prime  number ');
    
// }

/* conditional ternary operator */
/** it takes three operands **/

// var age = 20;
// console.log((age >= 18 ) ? " you can vote" : "you can't vote ");

// var score = 12;
// if (score === 0) {
//     console.log('we loss the game');
// } else {
//     console.log('we won the game');
// }

// var age = 20;
// if (age >= 13 && age <= 19) {
//     console.log("You are a teenager");
// } else {
//     console.log('you are not a teenager');
// }


// Switch Statements //
/** usually for overcome if-else-if statements **/
/** switch(condition){} **/

// var area = "circle"
// var pi=3.142, l=4, b=3, r=2;

// switch(area){
//     case 'circle':
//         console.log("the area of circle is " + pi*r**2);

//     case ' triangle':
//         console.log("the area of traiangle is " + (l*b)/2);

//     case 'rectangle':
//         console.log("the area of rectangle is " + (l*b));
        
//     default:
//         console.log("enter valid value");

    
// }

/* Break Statement */
/**the output will be areas of all shapes **/
/**now i wn only one area, i have to use "break" statement */

// var area = "square"
// var pi=3.142, l=4, b=3, r=2;

// switch(area){
//     case 'circle':
//         console.log("the area of circle is " + pi*r**2);
//         break;

//     case ' triangle':
//         console.log("the area of traiangle is " + (l*b)/2);
//         break;

//     case 'rectangle':
//         console.log("the area of rectangle is " + (l*b));
//         break;
        
//     default:
//         console.log("enter valid value");

    
// }


//     LOOPS    //
/* while loop and do while loop */

/** print mumbers up to 10 **/

// var num = 0;
// while(num <= 10){
//     console.log(num);
//     num++;
// }

//* print table of 8

// var num = 1;
// while(num <= 10){
//     var tableof = 8;
//     console.log(tableof*num);
//     num++;
// }


/*  do-while loop */
// var num = 0;

// do{
//     console.log(num);
//     num++;

// }
// while(num <= 10);



// for loop //

/** for(initializer;condition;iteration){code to be excuted} */


// for (var num=0; num<= 10; num++) {

//     console.log(num);

// }


//* challange time 
// * print table of 8

// for(var a = 1; a<=10; a++){
//     var tableof = 8;
//     console.log(tableof + "*" + a + "=" + tableof*a); // print like 8*1=8
//     console.log(tableof*a); // print like 8,16,24 top to bottom

// }

// functions // 
// function functionname(){ statement}

/** practice  **/


// function sum(){
//     var a=20, b=30;
//     var total = a + b;
//     console.log(total);
//     // this also hard core we cannot change a,b values 

// }
// sum(); // function call

//* for reusable code 

// function sum(a,b){   // a,b are parameters
//     var total= a+b;
//     console.log(total);
// }
// sum(20,40); // here passed values are arguments
// sum(30,50);

/** function expressions **/
/** create a function and put into the vrriable **/


// function sum(a,b){  
//     var total= a+b;
//     console.log(total);
// }
// var funexp = sum(20,40);
// funexp;

/** return **/

function sum(a,b){  
    return total= a+b;
}
var funexp = sum(20,40);
console.log(funexp);


//* practice *//

// 1. For every 9, add the multiplication by 1
let i = 1;
for ( let i=1; i<=10 ; i++ ){
    console.log ( `9 x ${i}`);
}


// 2. checking a string is Palindrome by if-else

let str : string = "madam";
let reverseStr : string ="";

let strLength = str.length ;

for (let i = (strLength -1); i>=0 ; --i){
    reverseStr = reverseStr + str.charAt(i);
}

if (str.toLowerCase()===(reverseStr.toLowerCase())){
    console.log (str + " is a Palindrome String.");
}
else {
    console.log (str + " is NOT a Palindrome String.");
}


//3. Converting cm to kms

//4. Format a number to currency of IDR

//5. Removing a part from a full string

const String5 : string = "Hello World";
const Stringsearch5 = String5.search("ell");
console.log (Stringsearch5);


//6. Capitalize the first letter of a full-string

const String6 : string = "hello world";
console.log(String6.slice(0,1).toUpperCase()+String6.slice(1,6)+String6.slice(6,7).toUpperCase()+String6.slice(7));

//7. Swapping the case of each character from string
let String7 : string = "The QuiCk BrOwN Fox";

if (String7>="A"&& String7<="Z"){
   console.log (String7.toLowerCase())
} //I don't know what to do with the rest


//8. Finding the largest of two given integers

const number1 : number = 42;
const number2 : number = 27;

console.log(number1 > number2);

//9. conditional statement to sort three numbers

const number3 : number = 18

//10. > input is a string ; > input is a number ; > Other data type

//11. Changing every letter "A" into "*" from a full string

let String11 : string = "an apple a day keeps the Doctor away.";
console.log (String11.replace( /a/g, "*"));
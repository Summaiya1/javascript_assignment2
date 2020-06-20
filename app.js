// chapter 21-25

// Question # 1

var body = (`
<input type='text' placeholder="Enter first name"></input>
<input type='text' placeholder="Enter last name"></input>
<button>Greet Me</button>
`);

document.body.innerHTML = body;  


const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    alert(`hello ${inputs[0].value} ${inputs[1].value}`);
});
 


// Question # 2

var body = (`
<input type='text' placeholder="Enter your favourite mobile phone model"></input>
<button>ok</button>
`);

document.body.innerHTML = body;  


const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click',()=>{
    document.write(`My favourite phone is:${input.value} and length of string is ${input.value.length}`);
}); 

// Question # 3


var string = 'Pakistan';
var arrstr = string.split('');


document.body.innerText = (`String is :'Pakistan'
 index of 'n' is : ${arrstr.indexOf('n')}`); 

 // Question # 4

 var str = 'Hello World';

var result = str.lastIndexOf('l');

document.body.innerText= ('last index of l in str is ' +result);

// Question # 5

var string  = 'Pakistan';
document.body.innerText= (`str ${string} and character at index 3 is ${string.charAt(3)}`);  

// Question # 6

var body = (`
<input type='text' placeholder="Enter first name"></input>
<input type='text' placeholder="Enter last name"></input>
<button>Greet Me</button>
`);

document.body.innerHTML = body;  


const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    alert(`hello ${inputs[0].value.concat(inputs[1].value)}`);
});  
 

// Question # 7

var str =  "hyderabad";
var result = str.replace('hyderabad' ,'Islamabad');

document.body.innerHTML = (`city : ${str} <br> After replacement : ${result}`);  


// Question # 8

var message = "Ali and Sami are best friends. They play cricket and football together";
var result = message.split('and').join('&');


document.body.innerHTML = (`message: ${message} <br> After replacement : ${result}`); 

// Question # 9
var strNum = '472';
var type = typeof strNum;
var num = parseInt(strNum);
var type1 = typeof num;

document.body.innerHTML = (`string: ${strNum} <br>  type: ${type} <br>  number: ${num} <br>  type: ${type1}`); 

// Question # 10

var body = (`
<input type='text' placeholder="Enter input"></input>
<button>OK</button>
`);

document.body.innerHTML = body;  


const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    document.body.innerHTML = (`string: ${input.value} <br> upperCase string : ${input.value.toUpperCase()}`);

}); 


// Question # 11

var body = (`
<input type='text' placeholder="Enter input"></input>
<button>OK</button>
`);

document.body.innerHTML = body; 

const input = document.querySelector('input');
const button = document.querySelector('button');
const titlecase = (array) =>{
  for(var i=0 ; i <array.length ; i++)
  {
      if(i==0)
      {
         var result = array[i].toUpperCase();
      }
      else{
          result += array[i];

      }

  }
  return result;
  
};

button.addEventListener('click',()=>{
    const strarr = input.value.split(""); 
    const answer =titlecase(strarr);
    document.body.innerHTML = (`string: ${input.value} <br> Titlecase string : ${answer}`);

});


// Question # 12
var num = 35.36 ;
var result = num.toString().replace('.','');

document.body.innerHTML = (`number: ${num} <br> string : ${result}`);



// Question # 13

var body = (`
<input type='text' placeholder="Enter input"></input>
<button>OK</button>
`);

document.body.innerHTML = body;  


const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{
      
    const userInput = input.value;
    const userInputArray = userInput.split('');
    for(const d of userInputArray ) {
        if (d === "@" || d=== "." || d=== "," || d=== "!" || d=== "[" || d=== "]") {
            alert('Please enter valid username');
           break;
        }

    }

});  

// Question # 14

var A = ["cake", "apple pie","cookie", "chips", "patties"];

var item = prompt("welcome to ABC bakery. what do you want to buy sir/mam?")
var temp = 0;


for(const items of A ) {
  
    if (item.toLowerCase() == items){
        document.body.innerHTML = (`${item} is available at index ${A.indexOf(items)}`);
        temp++;
        break;
    }
    
}  

if(temp == 0)
{
    document.body.innerHTML = (`${item} is not available in our bakery `);
}  

// Question # 15

var regularExpression = /^[a-zA-Z0-9]\w{6,}$/


var body = (`
<input type='text' placeholder="Enter password"></input>
<button>OK</button>
`);

document.body.innerHTML = body;  


const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    if(input.value.match(regularExpression))  
    {
        document.body.innerHTML = (`thankyou`)
    }
    else
    {
        document.body.innerHTML = (`Please enter valid password`);

    }
    
}); 

// Question #16

var university = "University of Karachi";

for(const f of university.split(''))
{
    document.body.innerHTML += (`${f}<br>
    `);
}



// Question # 17


var body = (`
<input type='text' placeholder="Enter text"></input>
<button>OK</button>
`);

document.body.innerHTML = body;  


const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{
   document.body.innerHTML = (`User input: ${input.value}<br>
                            last charachter of ${input.value} is ${input.value.substr(-1)}`);
}); 



// Question # 18

var str ="The quick brown fox jumps over the lazy dog";
var temp=0;

for(const items of str.split(' ') ) {
  
    if ('the' == items.toLowerCase()){
        temp++;
    }
    
}

document.body.innerHTML = (`string: ${str}<br>
There are ${temp} occurences of 'the`); 


// chapter - 26 - 30

//Question # 1
var body = (`
<input type='text' placeholder="Enter number"></input>
<button>OK</button>
`);

document.body.innerHTML = body; 


// var isInt = (n) => {
//     if(parseInt(n) === n) {
//     return true;
// }
// }; 

const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{

    if(input.value > 0)
    {
        document.body.innerHTML = (`User input: ${input.value}<br>
        round off value : ${Math.round(input.value)}<br>
        floor value: ${Math.floor(input.value)}<br>
        ceil value : ${Math.ceil(input.value)}<br>`);
    }
    else
    {
        document.body.innerHTML = (`please enter positive number and it should be integer`)
    }
 
});  


// Question # 2

var body = (`
<input type='text' placeholder="Enter number"></input>
<button>OK</button>
`);

document.body.innerHTML = body; 


const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{

    if( Number.isInteger(Number(input.value.substring(1))) === false & parseFloat(input.value.substring(1)) > 0  & input.value.substr(0,1) === '-' )
    {
        document.body.innerHTML = (`User input: ${input.value}<br>
        round off value : ${Math.round(input.value)}<br>
        floor value: ${Math.floor(input.value)}<br>
        ceil value : ${Math.ceil(input.value)}<br>`);
    }
    else
    {
        document.body.innerHTML = (`please enter negative number and it should be float`)
    }
 
});


// Question # 3


var body = (`
<input type='number' placeholder="Enter number"></input>
<button>OK</button>
`);

document.body.innerHTML = body; 


const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{

   if(input.value < 0)
   {
    var body = (`value is ${input.value} and  absolute value is ${Math.abs(input.value)}`);
    document.body.innerHTML = body
   }
   else
   {
   var body = (`Please enter negative value`);
   document.body.innerHTML = body
   }
   
 
}); 


// Question # 4

function randomIntFromInterval(min,max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
document.body.innerHTML = (` random dice value is ${randomIntFromInterval(1,6)}`) 

// Question # 5

var body = (`
<button>OK</button>
`);

var heads = 0;
var tails = 0;
document.body.innerHTML = body; 


const button = document.querySelector('button');
button.addEventListener('click',()=>{

    var x = (Math.floor(Math.random() * 2) == 0);
    if(x)
    {
    	document.body.innerHTML = (`${Math.floor(Math.random() * 2)} <br> it is head`);
    }else
    {
        document.body.innerHTML = (`${Math.floor(Math.random() * 2)} <br> it is tail`);
    }

});
  // Question # 6

function randomIntFromInterval(min,max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
document.body.innerHTML = (` random number between 1 and 100 is ${randomIntFromInterval(1,100)}`) 
 

  // Question # 7


  var regularExpression1 = /^(\d+(\.\d+)?\kg)$/
  var regularExpression2 = /^(\d+(\.\d+)?)$/
  var regularExpression3 = /^(\d+(\.\d+)?\kgs)$/
  var regularExpression4 = /^(\d+(\.\d+)?\kilograms)$/
  var regularExpression5 = /^(\d+(\.\d+)?\kilogram)$/
  
  
  var body = (`
  <input type='text' placeholder="Enter your weight"></input>
  <button>OK</button>
  `);
  
  document.body.innerHTML = body;  
  
  
  const input = document.querySelector('input');
  const button = document.querySelector('button');
  button.addEventListener('click',()=>{
      if(input.value.match(regularExpression1) || input.value.match(regularExpression2) || input.value.match(regularExpression3) || input.value.match(regularExpression4) || input.value.match(regularExpression5))  
      {
          document.body.innerHTML = (`thankyou your weight is recorded`)
      }
      else
      {
          document.body.innerHTML = (`Please enter valid weight`);
  
      }
      
  }); 

  // Question # 8
  
var body = (`
<input type='number' placeholder="Enter  number between 1 and 10"></input>
<button>OK</button>
`);

document.body.innerHTML = body; 

function secret_number(min,max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  const input = document.querySelector('input');
  const button = document.querySelector('button');
  button.addEventListener('click',()=>{
        const num = secret_number(1,10);
        if(input.value == num)
        {
            alert('wow you guessed correctnumber')
     
        }
        else
        {
           alert('Try again')
        }
 });
 

 // Chapter 31-34

 //Question # 1

var d = new Date();
 document.body.innerText=(`Today date is ${d}`);

 // Question # 2

var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.body.innerText=(`Current Month  is ${months[d.getMonth()]}`); 



// Question # 3
var d = new Date();
var months = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
document.body.innerText=(`Today  is ${months[d.getDay()]}`);


 // Question # 4

 var d = new Date();
 if(d.getDay() === 5 | d.getDay() === 6) 
 {
    document.body.innerText=(`It's funday`);

 }

 
 

 // Question # 5

 var d = new Date();
 if(d.getDate() <= 15) 
 {
    document.body.innerText=(`First fifteen days of month`);

 }
 else{
    document.body.innerText=(`last days of month`);
 }



// question # 6

var d = new Date();

document.body.innerText=(`Current date is ${d}
                           elapsed milliseconds since January 1,1970 is ${Date.UTC(2020,6)}
                           elapsed minutes since January 1,1970 is ${Date.UTC(2020,6)/60000}`);



// question # 7

var d = new Date();
if(d.getHours() > 12)
{
    document.body.innerText=(`it's PM`)
}
else if(d.getHours() <= 12)
{
    document.body.innerText=(`it's AM`)
}



// Question # 8

var laterDate = new Date(2020,11,31,00,00,00);

document.body.innerText=(`${laterDate}`);


// Question # 9

const oneDayMilliseconds = 24 * 60 * 60 * 1000;
var startingDateRamadan = new Date(2020,3,23);
var todayDate =  new Date(2020,6,19);

// .getTime() for milliseconds

const diffDays = Math.round(Math.abs((todayDate.getTime() - startingDateRamadan.getTime() ) / oneDayMilliseconds));
document.body.innerText=(`${diffDays} days have been passed from 1st day of ramadan`);


// Question # 9


var refDate = new Date(2015,11,5);
var todayDate =  new Date(2020,6,19);

var todayDateMilliseconds = todayDate.getTime();
var refDateMilliseconds = refDate.getTime();
var totalSeconds = (todayDateMilliseconds - refDateMilliseconds ) / 60000;

document.body.innerText= (`${totalSeconds} has been passed`);


// Question # 10

var currentDate = new Date(2020,6,19,10,34,46);
var PreviousDate =  new Date(2020,6,19,9,34,46);

document.body.innerText = (`Current Date is ${currentDate} , one hour ago it was ${PreviousDate}`)



// Question # 11


var currentDate = new Date(2020,6,19,10,34,46);
var PreviousDate =  new Date(1920,6,19,9,34,46);

document.body.innerText = (`Current Date is ${currentDate} , 100 years back it was ${PreviousDate}`)


// Question # 12

var body = (`
<input type='number' placeholder="Enter your age "></input>
<button>OK</button>
`);

document.body.innerHTML = body; 


const input = document.querySelector('input');
const button = document.querySelector('button');
const currentYear = 2020;

button.addEventListener('click',()=>{
    const birthYear = currentYear - input.value;
   document.body.innerText = (`Your birth year is ${birthYear}`);
 
});  

// Question # 13

//Math.round(num * 100) / 100
var noOfUnits = 410;
var chargesPerUnit = 16;
var latePaymentSurCharge = 350;
var netAmountPayable = noOfUnits * chargesPerUnit;
var grossAmountPayable = netAmountPayable + latePaymentSurCharge;

var nameCustomer = 'ABC customer';
var month = 'February';

var body =(`
<h1>K-Electric Bill</h1>
<p>Customer Name :${nameCustomer}<br>
Month : ${month}<br>
Number Of Units: ${noOfUnits}<br>
Charges per unit: ${chargesPerUnit}<br><br>

Net amount payable(within Due Date): ${netAmountPayable}<br>
late payment surcharge : ${latePaymentSurCharge}<br>
Gross Amount Payable : ${grossAmountPayable}
</p>
`);

document.body.innerHTML = body;




// Chapters 35-38

// Question # 1
function myDate()
{
    var d = new Date();
    document.body.innerText=(`Today date is ${d}`);
}

myDate();

// Question # 2

var body = (`
<input type='text' placeholder="Enter first name"></input>
<input type='text' placeholder="Enter last name"></input>
<button>Greet Me</button>
`);

document.body.innerHTML = body;  


const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    alert(`hello ${inputs[0].value} ${inputs[1].value}`);
});


// Question # 3


var body = (`
<input type='text' placeholder="Enter first no"></input>
<input type='text' placeholder="Enter last no"></input>
<button>add</button>
`);

document.body.innerHTML = body;  
function adding()
{
   document.write(`the addition of two number is ${+inputs[0].value + +inputs[1].value}`)
}

const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',adding);



// Question # 4

var body = (` 
<input type="number" placeholder='Enter first number'>
<input type="number" placeholder = 'Enter second number'>
<input type="text" placeholder = 'Enter operator' >
<br>
<br>
<button>ok</button>
<p></p>`);

document.body.innerHTML = body;

var inputs = document.querySelectorAll("input");
var button = document.querySelector('button');
var p = document.querySelector("p");
button.addEventListener('click',operate);

function operate(event)
{
    if(inputs[2].value == '+')
    {
        p.innerText = (`the answer is ${+inputs[0].value +  +inputs[1].value}`);
    }
    else if(inputs[2].value == '-')
    {
        p.innerText = (`the answer is ${+inputs[0].value -  +inputs[1].value}`);
    }
    if(inputs[2].value == '/')
    {
        p.innerText = (`the answer is ${+inputs[0].value /  +inputs[1].value}`);
    }
    if(inputs[2].value == '*')
    {
        p.innerText = (`the answer is ${+inputs[0].value *  +inputs[1].value}`);
    }
}


// Question # 5
var body = (`
<input type='number' placeholder="Enter number"></input>
<button>square</button>
`);

document.body.innerHTML = body;  
function squaring()
{
   document.write(`the square of  number is ${input.value * input.value}`)
}

const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',squaring);





// Question # 6

var body = (`
<input type='number' placeholder="Enter number"></input>
<button>factorial</button>
`);

document.body.innerHTML = body;  
function factorial()
{
    let answer = 1;
    if (input.value == 0 || input.value == 1)
    {
        document.write(`the factorial of  number is ${answer}`);
    }
    else
    {
    for(var i = input.value; i >= 1; i--){
    answer = answer * i;
    }
    document.write(`the factorial of  number is ${answer}`);
}
}

const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',factorial);



// Question # 7

var body = (` 
<input type="number" placeholder='Enter first number'>
<input type="number" placeholder = 'Enter second number'>
<br>
<button>ok</button>
<p></p>`);

document.body.innerHTML = body;
function counting()
{
    for(let i=inputs[0].value; i<=inputs[1].value ; i++)
    {
          document.body.innerHTML +=(`${i}\n`);
    }
}


const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',counting);  

// Question # 8

var body = (` 
<input type="number" placeholder='Enter hypotenuse'>
<input type="number" placeholder = 'Enter Base'>
<input type="number" placeholder = 'Enter Perpendicular'>
<br>
<button>ok</button>
<p></p>`);

document.body.innerHTML = body;

function squaring(n)
{
   return(n * n);
}

function calculateHypotenuse()
{
    const hyp = squaring(inputs[0].value);
    const base = squaring(inputs[1].value);
    const perp = squaring(inputs[2].value);

    const sum = base + perp;
    if(hyp == sum)
    {
        document.body.innerHTML = (`formula is true`);
    }
}


const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',calculateHypotenuse);


// Question # 9

var width = 20;
var heigth = 20;

function calcualteArea(width,height)
{
    var Area = width * height;
    return Area;
}


function calculateAreaByValue(width=30,height=30)
{
    var Area = width * height;
    return Area;
}


// Question # 10


var body = (`
<input type='text' placeholder="Enter string"></input>
<button>ok</button>
`);

document.body.innerHTML = body;  
const reverseString = ()=>
   {
      const x = input.value.split('');
      const y = x.reverse();
      const z = y.join('');
      console.log(z);
      return z;
   }
function palindromeString()
{
   if(input.value === reverseString())
   {
       document.body.innerHTML =('string is palindrome');
   }
   else
   {
    document.body.innerHTML =('string is not palindrome');
   }
}

const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',palindromeString);




// Question # 11
 
 
var body = (`
<input type='text' placeholder="Enter input"></input>
<button>OK</button>
`);

document.body.innerHTML = body; 

const input = document.querySelector('input');
const button = document.querySelector('button');
const titlecase = (word) =>{
  for(var i=0 ; i <word.length ; i++)
  {
      if(i==0)
      {
         var result = word[i].toUpperCase();
      }
      else{
          result += word[i];

      }

  }
  return result;
  
};
var answer = [];

button.addEventListener('click',()=>{
    for(const word of input.value.split(" ")) 
    {
       
       answer.push(titlecase(word));
       
    }
    
    document.body.innerHTML = (`string: ${input.value} <br> Titlecase string : ${answer.join(' ')}`);

});



// Question # 12

var body = (`
<input type='text' placeholder="Enter input"></input>
<button>OK</button>
`);

document.body.innerHTML = body; 
var answer ={};
var length_array =[];
var big =0;
const input = document.querySelector('input');
const button = document.querySelector('button');
const length = (word) =>{
   answer[word.length] = word;
   length_array.push(word.length);
};


button.addEventListener('click',()=>{
    for(const word of input.value.split(" ")) 
    {
       const result = length(word);
       
    }
    big = Math.max(...length_array); // array destruction
  
    document.body.innerHTML = (`string: ${input.value} <br> high length  word is : ${answer[big]}`);

});



// QUESTION # 13


var body = (`
<input type='text' placeholder="Enter string"></input>
<input type='text' placeholder="Enter letter for checking its occurences"></input>
<button>ok</button>
`);

var occurence = 0;
document.body.innerHTML = body;  

function checkingOccurences()
{
    let arr = input[0].value.split('');
   for(let i=0; i < input[0].value.length ; i++)
   {
        if(arr[i] === input[1].value)
        {
            occurence++;
        }

   }
   document.body.innerHTML = (`The occurences of ${input[1].value} in ${input[0].value} are ${occurence}`);
}

const input = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',checkingOccurences);



// Question # 14

function calcCircumference(radius)
{
   return (2*Math.PI*radius);
}

function calcArea(radius)
{
    return (Math.PI * radius * radius);
}


 













 

























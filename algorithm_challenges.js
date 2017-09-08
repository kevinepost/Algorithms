///////////// #1 - Get 1 to 255
function Get_Array() {
    var arr = [];
    for (var i = 1; i < 256; i++){
        arr.push(i);
    }
    return arr;
}
Get_Array()

//////////////#2 - Sum Odd 5000
function Sum_Odd_5000(){
    var sum = 0;
    for (var i = 1; i <= 5000; i++){
        if(i % 2 == 1) {
            sum = sum + i;
        }
    }
    return sum;
}
Sum_Odd_5000()


/////////////////////Algorithms
function IsPrime(num) {
    for(var i = 2; i < num; i++) {
        if(num % i == 0) {
            return false;
        }
    }
            return true;
}
IsPrime()


//////////////////////flexCount
function flexCount(lowNum, highNum, mult){
    var lowNum = 4;
    var highNum = 100;
    var mult = 2;

    for(var i = highNum; i >= lowNum; i -mult)
    {
        console.log(i);
    }
}
flexCount()


///////////////////////////filter method
const age = [22,33,45,65];
const pos = age.filter(function(n){
	return n>30;
});
console.log(pos);


/////////////////////////javascript promise
var myProm = new Promise(function(resolve,reject){
	let clean = true;
	if(clean==true){
		resolve('good work!');
	}else if(clean==false){
		reject('too lazy!');
	}
});

myProm.then(function(fromResolve){
	alert(fromResolve);
}).catch(function(fromReject){
	alert(fromReject);
});


//////////////////////////binary search
var doSearch = function(array,targetV){
  var min =-1;
  var max = array.length+1;
  var guess;
  var totalg =0;
  while(min<=max){
  	  totalg++;
  	  guess=Math.floor((min+max)/2);
  	  if(array[guess]===targetV){
  	  	  console.log("guesses " + totalg);
  	  	  return "index " + guess;
  	  }else if(array[guess]<targetV){
  	  	  min=guess+1;
  	  }else{
  	  	  max=guess-1;
  	  }
  }return -1;
}
var primes = [1,2,3,5,29];
console.log(doSearch(primes, 2));


////////////////////// add two numbers with no + sign.
function noPlus(a,b){
	if(b==0){
		return a;
		}else{
	  var ans = a^b;
	  var car = (a&b) << 1;
	}
	return noPlus(ans,car);
}

console.log(noPlus(10,2));

///////////////////////////// factorial
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  
  // This is it! Recursion!!
  return n * factorial(n - 1);
}

document.write(factorial(5));

///////////////////////////////Factorial
function FirstFactorial(num) { 

  var factorial = 1;

  for (var i = 1; i <= num; i++) {  
    // multiply each number between 1 and num  
    // factorial = 1 * 1 = 1
    // factorial = 1 * 2 = 2
    // factorial = 2 * 3 = 6
    // factorial = 6 * 4 = 24
    // ...
    factorial = factorial * i;
  }

  return factorial;
         
}
   
FirstFactorial(4); 
/////////////////////////////////////////////
function FirstFactorial(num) { 

  // our factorial function
  function factorial(n) { 
 
    // terminate the recursion once we hit zero
    if (n===0) { return 1; }

    // otherwise keep calling the function recursively 
    else { return factorial(n-1) * n; }

  }

  return factorial(num);
         
}
   
FirstFactorial(4); 

/////////////////////////////////palidrome
function myFun(nums){
  for(var n=0;n<nums.length;n++){
    var startn = nums[n];
    var endn = nums[nums.length - n - 1];
    if(startn != endn){
      return false + ' ' + startn + ', ' + endn;
      //return nums[0];
    }
  }
      return true + ' ' + startn + ', ' + endn;
}
document.write(myFun('tacocat'));

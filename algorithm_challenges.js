// #1 - Get 1 to 255
function Get_Array() {
    var arr = [];
    for (var i = 1; i < 256; i++){
        arr.push(i);
    }
    return arr;
}
Get_Array()

//#2 - Sum Odd 5000
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


//Algorithms
function IsPrime(num) {
    for(var i = 2; i < num; i++) {
        if(num % i == 0) {
            return false;
        }
    }
            return true;
}
IsPrime()

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

var sumOf3And5Multiples = function(limit){
	var sum = 0;
	for(var x = 1; x <= limit; x++){
		if(x%3 === 0 || x%5 === 0){
			sum+=x;
		}
	}

	return sum;
}


var sumOfEvenFibonacciNumbers = function(limit){
	var sum = 0;
	var firstNum = 1;
	var secondNum = 2;
	while(secondNum<=limit){
		if(secondNum%2===0){
			sum+=secondNum;
		}
		secondNum += firstNum;
		firstNum = secondNum - firstNum;
	}
	return sum;
}

var largestPrimeFactor = function (n){
var i=2;
while (i<=n){
    if (n%i == 0){
        n/=i;    
    }else{
        i++;
    }
}
return i;
}

document.getElementById('sum').innerText = sumOf3And5Multiples(10);
document.getElementById('primeDenominator').innerText = largestPrimeFactor(600851475143);

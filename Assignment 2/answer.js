
console.log("Answer to the Ques. No 1 ----");
let array = [4,5,1,2,6,8,9,7,3];

let largest = 0;

for (let i=0 ; i< array.length ; i++){
    if(largest<array[i]){
        largest = array[i];
    }
}
let secondLargest = 0;

for (let i=0 ; i< array.length ; i++){
    if(secondLargest<array[i] && largest!= array[i] ) {
        secondLargest = array[i];
    }
}

console.log( "Second largest = " + secondLargest );

let lowest = 999999;

for (let i=0 ; i< array.length ; i++){
    if(lowest>=array[i]){
        lowest = array[i];
    }
}
let secondLowest = 99999;

for (let i=0 ; i< array.length ; i++){
    if(secondLowest>array[i] && lowest!= array[i] ) {
        secondLowest = array[i];
    }
}

console.log("\n");
console.log("\n");

console.log("Answer to the Ques. No 2 ----");

console.log("Second answer ----");
let array1 = [4,5,1,2,6,8,9,7,3,24,24,17,19,19,24];
let visited = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let countnumber=0;

for(let i=0 ;i<array1.length ; i++){
    let num = array1[i];
    if(visited[i]== 1){
        continue;
    }
    for(let j=0 ;j<array1.length ; j++){
        if(array1[i]==array1[j] && visited[j]!= 1){
            
            countnumber++;
            visited[j] = 1;
            
        }
    }
    console.log(  " Number = " + num + " count = " + countnumber);
    countnumber=0;
}

console.log("\n");
console.log("\n");
console.log("Answer to the Ques. No 3 ----");

console.log("Third answer ----");

const sentence = 'This day will become the most epic adventure in the history of war criminals .';
let wordCount = wordCounter(sentence);
function wordCounter(sentence){
	let wordsArray = sentence.split(' ');
	return wordsArray.length;
}

console.log("Word Count = " + wordCount);


console.log("\n");
console.log("\n");
console.log("Answer to the Ques. No 4 ----");

console.log("Fourth answer ----");

let array2d = new Array(4);

for(let i=0 ; i<array2d.length ; i++){
	array2d[i] = new Array(4);
}

for(let i=0 ; i<4 ; i++){
	for (let j=0 ; j<4 ;j++){
		array2d[i][j] =  i*4 + j+1; 
	}
}

let result="";
for(let i=0 ; i<4 ; i++){
	result += array2d[i].join(' ');
	result += "\n";
}

console.log(result);


console.log("\n");
console.log("\n");
console.log("Answer to the Ques. No 5 ----");

console.log("Fifth answer ----");

let diamondSize = 7;

console.log("Diamond for size " + diamondSize + " --------");
let result2 = createDiamond(diamondSize);

console.log(result2);

function createDiamond(size){

	let result = "";
	let printingSize = 2*(size-1) + 1;
	for (let i=0 ;i<printingSize ;i++){
		let spaceCount = Math.floor(printingSize/2) - i;

		if(spaceCount<0){
			spaceCount = -spaceCount;
		}
		
		for(let j=0 ; j<spaceCount ;j++){
			result += " ";
		}

		let starCount = 2*(Math.floor(printingSize/2) - spaceCount)+1;
		for(let j=0 ; j<starCount ;j++){
			result += "*";
		}
		result += "\n";
	}

	return result;
}

console.log("\n");
console.log("\n");
console.log("Answer to the Ques. No 6 ----");

console.log("Sixth answer ----");


function timeFormatConverter(time)
{  
	time = time.trim();
	let formatDecider = time.split(' ');
	let formattedTime = "";
	if(formatDecider.length == 1){
		let timeArray = formatDecider[0].split(":");
	    let twelveHourAmPm = 'AM';

	    if (timeArray[0] >= 12) {
	        twelveHourAmPm = 'PM';
	    }

	    if (timeArray[0] > 12 && timeArray[0]!=0) {
	        timeArray[0] = timeArray[0] - 12;
	    }

	    if(timeArray[0]==0) {
	        timeArray[0] = 12;
	    }

	    formattedTime = timeArray[0] + ':' + timeArray[1] + ':' + timeArray[2] + ' ' + twelveHourAmPm;
	}
	else if(formatDecider.length == 2){
		let timeArray = formatDecider[0].split(":");

		if(formatDecider[1].toUpperCase() === "PM" ){
			timeArray[0] = parseInt(timeArray[0]) + 12;
		}
	   
	    if(timeArray[0]==12 && formatDecider[1].toUpperCase() === "AM" ) {
	        timeArray[0] = 0;
	    }
	    if(timeArray[0]=24 && formatDecider[1].toUpperCase() === "PM" ) {
	        timeArray[0] = 12;
	    }

	    formattedTime = timeArray[0] + ':' + timeArray[1] + ':' + timeArray[2];
	}
    

    return formattedTime;
}


let time = timeFormatConverter("6:00:00");
console.log(time); 

time = timeFormatConverter("12:00:00 PM");
console.log(time);  


console.log("\n");
console.log("\n");
console.log("Answer to the Ques. No 7 ----");

console.log("Seventh answer ----");

const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

let fullMoney = moneyFormatter.format(63678366876545413).replace("$","");
let moneyWithDecimalParts = fullMoney.split('.');
let money = moneyWithDecimalParts[0];

console.log(money);
console.log("Number in words ----\n");
let num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
let tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
let scales = ['','thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion' ];
let moneyParts = money.split(',');

let moneyInWords = "";

for(let i=moneyParts.length-1 ; i>=0 ; i--){
	moneyInWords += number2words(moneyParts[moneyParts.length-1-i]);
	moneyInWords += " " + scales[i] +" ";
}

console.log(moneyInWords);

function number2words(numberString){

	let n = parseInt(numberString);

    if(numberString.length == 3 && numberString[0]!='0'){
    	let hundred =  "";
    	hundred = num[parseInt(numberString[0])] + " hundred ";
    	let tensCheck = 0;
    	tensCheck = parseInt(numberString[1] + numberString[2]);
    	if(tensCheck<20){
    		return hundred + num[tensCheck] ;
    	}
    	else{
    		return hundred + tens[parseInt(numberString[1])-2] + " " + num[parseInt(numberString[2])];
    	}
    }
    if(numberString.length == 2){
    	let tensCheck = 0;
    	tensCheck = parseInt(numberString[0] + numberString[1]);
    	if(tensCheck<20){
    		return num[tensCheck] ;
    	}
    	else{
    		return tens[parseInt(numberString[0])-2] + " " + num[parseInt(numberString[1])];
    	}
    }
}




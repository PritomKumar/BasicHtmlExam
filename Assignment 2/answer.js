
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




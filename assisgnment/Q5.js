var readlinesync=require("readline-sync");
var number=readlinesync.question("Please enter the number:- ");
function countDigit(number){
    var c=0;
    while(number!=0){
      number=Math.floor(number/10);
    c=c+1;
    
    }
    console.log("The number of digits are "+c);

}
countDigit(number);
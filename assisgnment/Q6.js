var readlineSync=require("readline-sync");
var number=readlineSync.question('Please enter the number ');
function reverse(number){
    var ans=0;
    while(number !=0){
        ans=ans*10+Math.floor(number%10);
    
        number=Math.floor(number/10);

    }
    console.log(ans);
}
reverse(number);
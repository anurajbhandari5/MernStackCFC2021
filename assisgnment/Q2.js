var readlineSync=require("readline-sync");
var p=readlineSync.question('Please enter the amount---')
var r=readlineSync.question('Please enter the Rate----');
var t=readlineSync.question('Please enter the time---');
function SI(p,r,t){
    return (p*r*t)/100; 
}
console.log('Simple interst is= '+SI(p,r,t));

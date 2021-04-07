var readfilesync=require("readline-sync");
var a=readfilesync.question('Please enter your first number==');
var b=readfilesync.question('Please enter your second number=');
function GCD(a,b){
 var i;
 var gcd=0;
 for(i=1;i<=a && i<=b;i++){
     if(a%i==0 && b%i==0){
         gcd=i;
     }
 }
 return gcd;
}
console.log('The GCD of '+a+' and '+b+'= '+GCD(a,b));
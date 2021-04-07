var readlinesync=require("readline-sync");
var number=readlinesync.question("Please enter the number where you want to print the series=");
function series(number){
    
    var i=0;
   var x=2;
   var y=0;
    while(number-->0){
       i=x+4*y;
       console.log(i);

        x=i;
        y++;
            }
}
series(number);
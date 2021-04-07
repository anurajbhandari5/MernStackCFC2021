var readlineSync=require("readline-sync")
var credit =readlineSync.question('Please enter the credit of a Campus leader:    ' );
if(credit>=7500){
    console.log("Tera leader");
}else if(credit>=6000 && credit<7500){
    console.log("Gega leader");
}else if(credit>=4500 && credit<6000){
    console.log("Mega leader");
}else{
    console.log("Rising star");
}
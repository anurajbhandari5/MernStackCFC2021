var row=5;
var s=2*row-1;
for(var i=0;i<(Math.floor(s/2))+1;i++){
    var m=row;
    for(var j=0;j<i;j++) {
        
        process.stdout.write(String(m));
        m--;
    }
    for(var k=0;k<s-2*i;k++){
        process.stdout.write(String(row-i));
    }
    m=row-i+1;
    for(var l=0;l<i;l++){
        process.stdout.write(String(m));
        m++;
    }
    process.stdout.write("\n");

}
for(var i=Math.floor(s/2)-1;i>=0;i--){
    var m=row;
    for(var j=0;j<i;j++){
        process.stdout.write(String(m));
        m--;
    }
    for(var k=0;k<s-2*i;k++){
        process.stdout.write(String(row-i));
    }
    m=row-i+1;
    for(var l=0;l<i;l++){
        process.stdout.write(String(m));
        m++;
    }
    process.stdout.write("\n");
}
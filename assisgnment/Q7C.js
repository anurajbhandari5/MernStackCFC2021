let row=5;
let k=0;
let c=0;
let c1=0;
for(var i=1;i<=row;i++){
    for(var s=1;s<=row-i;s++){
        process.stdout.write(" ");
        c++;
    }
    while(k!=2 *i-1){
        if(c<=row-1){
            process.stdout.write(String(k+1));
            ++c;
        }else{
            ++c1;
            process.stdout.write(String(k+1-2*c1));
        }
        k++;
    }
    c1=0,c=0,k=0;
    process.stdout.write("\n");
}
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
            process.stdout.write(String(i+k));
            ++c;
        }else{
            ++c1;
            process.stdout.write(String(i+k-2*c1));
        }
        k++;
    }
    c1=0,c=0,k=0;
    process.stdout.write("\n");
}
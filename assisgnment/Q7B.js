var n=5;
for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
    if(i>=j){
        process.stdout.write(String(j+1)+" ");
    }

    }
    process.stdout.write("\n");
}
var n=5;
for(var i=1;i<=n;i++){
    for(var j=1;j<=n;j++){
    if(i>=j){
        if(i==j || j==1){
        process.stdout.write("1");
    }else{
        process.stdout.write(String(i-1+j-2)); 
    }
}

    }
    process.stdout.write("\n");
}
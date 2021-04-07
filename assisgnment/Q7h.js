let n=5;

let row = 0;
let row_mirr = 0;
while(row_mirr < 2 * n - 1){

    let col = 0;
    let colmirr=0;
    while(colmirr < 2*n-1){
        if(col<n-row){
        process.stdout.write("*");
        }else{
            process.stdout.write(" "); 
        }
    
  if(colmirr<n-1){
      col+=1;
  }else{
      col-=1;
  }
colmirr+=1;
    }
    process.stdout.write("\n"); 
    if(row_mirr < n-1){
        row += 1;
    } else {
        row -= 1;
    }
    

    row_mirr += 1;
}
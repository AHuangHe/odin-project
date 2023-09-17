let n = 50;

for(let i = 2; i < n; i++){
    let prime = true;
    for(let j = 1; j <= i; j++){
        if(j == 1) {
            continue;
        } else if(i % j == 0 && i !== j){
            prime = false;
        }
    }
    if(prime) {
        console.log(i);
    }
}
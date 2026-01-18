function squareNumber(n){
    let squareTillN=[];
    for(let i=1;i<n;i++){
        let perfectSquare
        perfectSquare = i*i
        if(perfectSquare<n){
            squareTillN.push(perfectSquare)
        }else{
            return squareTillN
        }
    }
    return squareTillN
}

console.log(squareNumber(12));

function isFibonacci(number){
    let result = 0, initial = 0, lastNumber = 1;

    while(result < number){
        result = initial + lastNumber;
        initial = lastNumber;
        lastNumber = result;        
    }

    if(result === number) return `${number} faz parte da sequencia de Fibonacci`
    
    else return `${number} nao faz parte da sequencia de Fibonacci`

    
}

console.log(isFibonacci(8))
console.log(isFibonacci(4))
console.log(isFibonacci(5))
console.log(isFibonacci(37))
console.log(isFibonacci(22))
console.log(isFibonacci(13))
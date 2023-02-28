function inverteString(string){
    let invertido = '';

    for(let i = string.length - 1; i >= 0; i--){
        invertido += string[i];
    }

    return invertido;
}

console.log(inverteString('Teste'))
console.log(inverteString('Casa'))
console.log(inverteString('Labirinto'))
console.log(inverteString('Inconstitucionalissimamente'))
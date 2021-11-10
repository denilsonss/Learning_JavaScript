//arrow function com uma linha

const apresentarArrow = nome => `meu nome é ${nome}`
console.log('Dida')
// arrow function com mais de uma linha de intrunção

const somaNumerosPequenos = (num1 = false, num2 = 1) => {
    if(num1 === false) {
        return "não soma numero maior que 10";
    } else {
        return num1 + num2;}
}
console.log(somaNumerosPequenos(2, 4))
const data = require('./input.json')

let encontrado = false;
let product = 0;

for (let i = 0; i < data.length - 1 && !encontrado; i += 1) {
    const secondArray = data.slice(i + 1)
    for (let j = 0; j < secondArray.length && !encontrado; j += 1) {
        const secondSum = data[i] + secondArray[j];
        if (secondSum <= 2020) {
            const thirdArray = secondArray.slice(j + 1);
            for (let k = 0; k < thirdArray.length && !encontrado; k += 1) {
                if (secondSum + thirdArray[k] === 2020) {
                    encontrado = true;
                    product = data[i] * secondArray[j] * thirdArray[k];
                }
            }
        }
    }
}

console.log(product)
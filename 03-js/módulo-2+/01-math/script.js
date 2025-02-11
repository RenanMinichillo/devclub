/* 
        MATH
    - pow(2,2) → potência > 2² = 4
    - sqrt(25,2) → raiz > √25
    - PI → 3.14159265359
    - ceil → 1.20 = 2 > Arredondar número para cima
    - flor → 1.98 = 1 > Arredondar número para baixo

    - random() → Número aleatório entre 0 e 1
*/

const xMathPow = Math.pow(2,3)
const xMathSqrt = Math.sqrt(100,5)
const xMathPi = Math.PI
const xMathCeil = Math.ceil(1.21)
const xMathFloor = Math.floor(1.98)
const xMathRandom = Math.random().toFixed(2)

console.log(`A potência é ${xMathPow},
            A Raiz quadrada é ${xMathSqrt},
            O PI é ${xMathPi},
            O valor arredondado para cima é ${xMathCeil},
            O valor arredondado para baixo é ${xMathFloor},
            O valor aleatório é ${xMathRandom}`)
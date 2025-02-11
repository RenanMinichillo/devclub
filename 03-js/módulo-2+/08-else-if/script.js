/*
  
    IF (SE)
    ELSE (SE NÃO)
    ELSE IF (SE ENTÃO)

*/

const temperatura = 36

if (temperatura === 36) { // 36 → Saúdavel
    console.log(`Você está saudável, sua temperatura é ${temperatura}`)
}
else if (temperatura >= 36 && temperatura <= 40) { // 40 → Febre
    console.log(`Você está com febre, sua temperatura é ${temperatura}`)
}
else if (temperatura > 40) { // 40 → Muita Febre
    console.log(`Você está com muita febre, sua temperatura é ${temperatura}`)
}
else if (temperatura <= 36 && temperatura >= 32) { // 32 → Doente
    console.log(`Você está com muita febre, sua temperatura é ${temperatura}`)
}
else { // 28 → Hipotermia
    console.log(`Você está com hipotermia, sua temperatura é ${temperatura}`)
}
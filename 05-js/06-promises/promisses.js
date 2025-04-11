const convertValues = async () => {
    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())

    const dolar = data.USDBRL.bid
    const euro = data.EURBRL.bid
    const bitcoin = data.BTCBRL.bid

    console.log(`A cotação do Dólar é: ${dolar}`)
    console.log(`A cotação do Euro é: ${euro}`)
    console.log(`A cotação do Bitcoin é: ${bitcoin}`)

}

convertValues()

'Utilizado no projeto do Conversor de moedas'
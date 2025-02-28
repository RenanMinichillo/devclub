/*
    MAP → Adicionar 10% de valor de mercado a todas as companhias
    FILTER → Filtrar somente companhias fundadas abaixo de 1990
    REDUCE → Somar o valor de mercado das restantes

*/

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
]

const add10Percent = (company) => ({
    ...company,
    marketValue: company.marketValue * 1.1
})
const filterCompanies = (company) => company.foundedOn < 1990
const calculateTotalMarketValues = (acc, company) => acc + company.marketValue

const updateCompanies = companies
.map(add10Percent)
.filter(filterCompanies)
.reduce(calculateTotalMarketValues, 0)

console.log(`A somatória total do valor de mercado das empresas filtradas é de R$${updateCompanies.toFixed(2)}`)
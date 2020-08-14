const axios = require('axios')
const data = new Date()
let day = data.getDate()
let month = data.getMonth()
let year = data.getFullYear()

if(day < 10 ){
    day = `0${day}`
}

if(month < 10 ){
    month = `0${month}`
}




const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${month}-${day}-${year}'&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

const getCotacaoAPI = (data) => axios.get(url)
const extractCotacao = res => res.data.value[0].cotacaoVenda
getCotacao = async () => {
    try {
        const res = await getCotacaoAPI('')
        const cotacao = extractCotacao(res)
        return cotacao
    } catch (error) {
        return ''
    }

}
module.exports = {
    getCotacao,
    extractCotacao,
    getCotacaoAPI
}
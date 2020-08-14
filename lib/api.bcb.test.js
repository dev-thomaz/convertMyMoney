const api = require('./api.bcb')
const axios = require('axios')

jest.mock('axios')

test('getCotacaoApi', () => {
    const res = {
        data: {
            value: [
                { cotacaoVenda: 3.90 }
            ]
        }
    }
    axios.get.mockResolvedValue(res)
    api.getCotacaoAPI().then( resp => {
        expect(resp).toEqual(res)
    })
})
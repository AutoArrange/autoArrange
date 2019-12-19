import fetch from './fetch'

export function getVerification(phone)
{
    return fetch.get('/get-verification', {phone: phone}).then((response)=>
    {
        var value = JSON.parse(response.data)
        console.info(response.data)
        if(value.code === 200)
        {
            return Promise.resolve(value)
        }
    })
}
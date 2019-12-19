import fetch from './fetch'
var storage = require('@system.storage')

export function register(username, password, phone, verification, description='', contact={})
{
    //TODO md5
    return fetch.post('/register', 
    {
        username: username,
        password: password,
        phone: phone,
        verification: verification,
        description: description,
        contact: contact
    }).then((response)=>
    {
        var value = JSON.parse(response.data)
        if(value.code === 200)
        {
            storage.set(
            {
                key: 'token',
                value: value.token,
                success:function(data)
                {
                    console.info('token保存成功')
                }
            })
            storage.set(
            {
                key: 'info',
                value: value.info
            })
            storage.set(
            {
                key: 'isLogin',
                value: true
            })
            return Promise.resolve(value)
        }
    })
}
import fetch from './fetch'
var storage = require('@system.storage')

export function login(id, password)
{
    //TODO md5
    return fetch.get('/login', {id: id, password: password}).then((response)=>
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
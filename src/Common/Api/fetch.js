var $fetch = require('@system.fetch')

const config = 
{
    ROOT: 'http://118.25.104.28:9102',
    headers: {}
}

function realFetch(url, data = null, method = 'get') 
{
    console.log('┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('┃ url: ', config.ROOT + url)
    console.log('┃ method: ', method)
    console.log('┃ data: ', JSON.stringify(data))
    console.log('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  
    return new Promise((resolve, reject) => 
    {
        $fetch.fetch(
        {
            url: config.ROOT + url,
            data: data,
            header: config.headers,
            method: method,
            success: function(data)
            {
                resolve(data)
            },
            fail: function(data, code)
            {
                reject(data)
            }
        })
    })
}

function post(url, data = null) 
{
    return realFetch(url, data, 'post')
}

function get(url, data = null)
{

    return realFetch(url, data, 'get')
}

export default
{
    post: post,
    get: get
}
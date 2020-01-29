const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const key = 'c56293a202577b212bf8e40228a73a48'
    const url = 'https://api.darksky.net/forecast/'+key+'/' + latitude + ',' + longitude
    

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const celciusTemp = (body.currently.temperature - 32)*5/9
            const roundedCelcius = celciusTemp.toFixed(2)
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + roundedCelcius + ' degrees celcius. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast
export function getCurrentDate(separator = '-') {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}

// export const getCurrentTemp = () => {

//     const apiKey = '9b2ae69bfce6899c26e740f85827a619'
//     let query = 'champlin'

//     const searchWeather = (query) => {

//         fetch(query)
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (data) {

//                 let resultsWeather = data

//                 // console.log(resultsWeather)

//                 let currentTemp = Math.round(((resultsWeather.main.temp - 273.15) * 9 / 5) + 32)

//                 let test = `${currentTemp} F`
//                 // console.log(test)
//                 console.log(test)
//                 return test
//             })
//     }
//     searchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`)
// };


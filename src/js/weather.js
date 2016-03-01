
var axios = require('../../node_modules/axios');

export default class Weather {

  constructor(api_key, api_url) {
    this.api_key = 'd34287f4a61b20a089415d7d0f112bc2';
    this.api_url = 'http://api.openweathermap.org/data/2.5/weather?';
  }

  getWeather(cb){

    console.log(this)

    var coords = localStorage.getItem("SWM_Position").split(","),
        url = this.api_url + 'lat=' + coords[0] + '&lon=' + coords[1] + '&appid=' + this.api_key;

    axios.get(url)
        .then(function (response) {
          cb(response.data.weather[0].id);
        })
        .catch(function (response) {});
  }

}
import WeatherData from '../weatherData.js'

const input = document.querySelector('.header__search-input');

input.addEventListener("input", (e) => {
  console.log(e.target.value);
});

const weatherList = document.getElementById('weatherList')

weatherList.innerHTML = `
  <li class="weather__cards-list-li">
    <h3 class="weather__cards-list-title">
      Влажность
    </h3>
    <img 
      src="./img/svg/humidity.svg" 
      alt="Иконка барометра"
      class="weather__cards-list-icon"
    >
    <span class="weather__cards-list-index">
      ${WeatherData.humidity} <span>%</span>
    </span>
    <div class="weather__cards-list-info">
      <div class="pb-container">
        <div class="pb-scale"></div>
        <div class="pb-ellipse"></div>
      </div>
      <div class="pb-container-index">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  </li>
  <li class="weather__cards-list-li">
    <h3 class="weather__cards-list-title">
      Давление
    </h3>
    <img 
      src="./img/svg/barometr.svg" 
      alt="Иконка давления"
      class="weather__cards-list-icon"
    >
    <span class="weather__cards-list-index">
      ${WeatherData.pressure}
    </span>
    <div class="weather__cards-list-info">
      <div class="pb-container">
        <div class="pb-scale humidity-scale"></div>
        <div class="pb-ellipse humidity-ellipse"></div>
      </div>
      Повышенное
    </div>
  </li>
  <li class="weather__cards-list-li">
    <h3 class="weather__cards-list-title">
      Видимость
    </h3>
    <img 
      src="./img/svg/visibility.svg" 
      alt="Иконка видимости"
      class="weather__cards-list-icon"
    >
    <span class="weather__cards-list-index">
      ${WeatherData.visibility} км
    </span>
    <div class="weather__cards-list-info">
      <div class="pb-container">
        <div class="pb-scale visibility-scale"></div>
        <div class="pb-ellipse visibility-ellipse"></div>
      </div>
      Нормальная
    </div>
  </li>
  <li class="weather__cards-list-li">
    <h3 class="weather__cards-list-title">
      Рассвет
    </h3>
    <img 
      src="./img/svg/sunrise.svg" 
      alt="Иконка рассвета"
      class="weather__cards-list-icon"
    >
    <span class="weather__cards-list-index">
      ${WeatherData.sunrise}
    </span>
    <div class="weather__cards-list-info">
      Прошло: 02:47
    </div>
  </li>
  <li class="weather__cards-list-li">
    <h3 class="weather__cards-list-title">
      Закат
    </h3>
    <img 
      src="./img/svg/sunset.svg" 
      alt="Иконка заката"
      class="weather__cards-list-icon"
    >
    <span class="weather__cards-list-index">
      ${WeatherData.sunset}
    </span>
    <div class="weather__cards-list-info">
      Осталось: 05:08
    </div>
  </li>
  <li class="weather__cards-list-li">
    <h3 class="weather__cards-list-title">
      Сила ветра
    </h3>
    <img 
      src="./img/svg/direction.svg" 
      alt="Направление ветра"
      class="weather__cards-list-icon"
    >
    <span class="weather__cards-list-index">
      ${WeatherData.windValue} м/с
    </span>
    <div class="weather__cards-list-info">
      ${WeatherData.windDirection}  
    </div>
  </li>
`
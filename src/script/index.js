import hourForecastData from '../data/hourForecast.js';
import WeatherData from '../data/weatherData.js';
import dayForecastData from '../data/dayForecast.js';

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

const hourForecast = document.querySelector('.hour-forecast')
const dayForecast = document.querySelector('.day-forecast')

const createForecastList = (data) => {
  data.forEach((item, index) => {
    const card = document.createElement('li')
    const date = document.createElement('span')
    const icon = document.createElement('img')
    const degree = document.createElement('span')

    card.className = 'forecast-card'
    date.className = 'forecast-card-date'
    icon.className = 'forecast-card-icon'
    icon.alt = 'Иконка осадков'
    degree.className = 'forecast-card-degree'

    item.time ? card.classList.add('hour-card') : card.classList.add('day-card')

    card.key = index
    date.innerText = item.time || item.date
    icon.src = item.icon
    degree.innerText = item.degree

    card.appendChild(date)
    card.appendChild(icon)
    card.appendChild(degree)

    item.time ? hourForecast.appendChild(card) : dayForecast.appendChild(card)
  })
}

createForecastList(hourForecastData);
createForecastList(dayForecastData);

// hourForecastData.forEach((item, index) => {
//   const card = document.createElement('li')
//   const time = document.createElement('span')
//   const icon = document.createElement('img')
//   const degree = document.createElement('span')

//   card.className = 'forecast-card hour-card'
//   time.className = 'forecast-card-time'
//   icon.className = 'forecast-card-icon'
//   icon.alt = 'Иконка осадков'
//   degree.className = 'forecast-card-degree'

//   card.key = index
//   time.innerText = item.time
//   icon.src = item.icon
//   degree.innerText = item.degree

//   card.appendChild(time)
//   card.appendChild(icon)
//   card.appendChild(degree)

//   hourForecast.appendChild(card)
// })

// dayForecastData.forEach((item, index) => {
//   const card = document.createElement('li')
//   const date = document.createElement('span')
//   const icon = document.createElement('img')
//   const degree = document.createElement('span')

//   card.className = 'forecast-card day-card'
//   date.className = 'forecast-card-time'
//   icon.className = 'forecast-card-icon'
//   icon.alt = 'Иконка осадков'
//   degree.className = 'forecast-card-degree'

//   card.key = index
//   date.innerText = item.date
//   icon.src = item.icon
//   degree.innerText = item.degree

//   card.appendChild(date)
//   card.appendChild(icon)
//   card.appendChild(degree)

//   dayForecast.appendChild(card)
// })

const tabs = document.querySelectorAll('.tab')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const id = tab.getAttribute('data-tab');
    const content = document.querySelector('.tab-content[data-tab="' + id + '"]');
    const activeTab = document.querySelector('.tab.active');
    const activeContent = document.querySelector('.tab-content.active')

    activeTab.classList.remove('active');
    tab.classList.add('active');
    activeContent.classList.remove('active');
    content.classList.add('active');
  })
})
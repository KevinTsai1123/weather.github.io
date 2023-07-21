let url="http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}";
let container=document.querySelector('.container');
let search=document.querySelector('.search button');
let not_found=document.querySelector('.not_found');
let weather_show1=document.querySelector('.weather-show1');
let weather_show2=document.querySelector('.weather-show2');
let weather_show3=document.querySelector('.weather-show3');

search.addEventListener('click',function () {
    const APIKey="ba100cef607fdbffa16bd12288d871a5";
    const city=document.querySelector('.search input').value;
    if(city===''){
        return;
    }
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(resonse=>resonse.json())
    .then(res=>{
        // console.log(res);
        // console.log(res.weather[0].description);
        // console.log(res.main.temp);
        // console.log(res.main.humidity);
        // console.log(res.wind.speed);
        if(res.cod==='404'){
            container.style.height='200px';
            weather_show1.style.display='none';
            weather_show2.style.display='none';
            weather_show3.style.display='none';
            not_found.style.display='block';
            not_found.classList.add('fade-in');
            return;
        }
        not_found.style.display='none';
        not_found.classList.remove('fade-in');

        const temperature=document.querySelector('.weather-show1 .temperature');
        const description=document.querySelector('.weather-show1 .description');
        const min_temperature=document.querySelector('.weather-show2 .min_temperature span');
        const max_temperature=document.querySelector('.weather-show2 .max_temperature span');
        const humidity=document.querySelector('.weather-show3 .humidity span');
        const wind=document.querySelector('.weather-show3 .wind span');

        let Weather="";
        switch(res.weather[0].main){
            case 'Clear':
                Weather="晴朗";
                break;
            case 'Rain':
                Weather="下雨";
                break;
            case 'Snow':
                Weather="下雪";
                break;
            case 'Clouds':
                Weather="多雲";
                break;
            case 'Haze':
                Weather="陰天";
                break;
            default:
                Weather="";
        }

        temperature.innerHTML=`${parseInt(res.main.temp)}<span>°C</span>`;
        // description.innerHTML=`${res.weather[0].description}`;
        description.innerHTML=`${Weather}`;
        min_temperature.innerHTML=`${parseInt(res.main.temp_min)}<span>°C</span>`;
        max_temperature.innerHTML=`${parseInt(res.main.temp_max)}<span>°C</span>`;
        humidity.innerHTML=`${res.main.humidity}%`;
        wind.innerHTML=`${res.wind.speed}km/h`;

        weather_show1.style.display='';
        weather_show2.style.display='';
        weather_show3.style.display='';
        weather_show1.classList.add('fade-in');
        weather_show2.classList.add('fade-in');
        weather_show3.classList.add('fade-in');
        container.style.height='450px';
    })
})
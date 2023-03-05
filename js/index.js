const API_KEY = `8622d6383bac7ffbe9972e182ef347a9
`;
const loadTemperature = city =>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
    console.log(url);
}
const displayTemperature = data =>{
    // console.log(data.weather[0].main)
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
    
}
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;
    loadTemperature(city);
});
const setInnerTextById =(id, text) =>{
    const temperature = document.getElementById(id);
    temperature.innerHTML =`${text}`;
 
}
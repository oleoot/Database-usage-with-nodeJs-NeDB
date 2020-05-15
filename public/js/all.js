const wrapper = document.querySelector('#wrapper')
async function getData() {
    const response = await fetch('/api');
    const data = await response.json();
    console.log(data);
    data.forEach(item => {
        const { lat, lon, mood, timestamp, image64 } = item
        const div = document.createElement('div');
        const latitude = document.createElement('p');
        latitude.innerText = `Широта: ${lat}°`
        const longitude = document.createElement('p')
        longitude.innerText = `Долгота: ${lon}°`
        const userMood = document.createElement('p')
        userMood.innerText = `Настроение: ${mood}`;
        const date = document.createElement('p');
        const dateString = new Date(timestamp).toLocaleString();
        date.innerText = `Дата | время: ${dateString}`;
        const img = document.createElement('img');
        img.src = image64
        div.append(latitude, longitude, userMood, date, img)
        wrapper.append(div);
    });
}
getData();

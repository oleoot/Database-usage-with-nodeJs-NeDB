const wrapper = document.querySelector('#wrapper')
async function getData() {
    const response = await fetch('/api');
    const data = await response.json();
    console.log(data);
    data.forEach(item => {
        const { lat, lon, mood, timestamp } = item
        const div = document.createElement('div');
        const latitude = document.createElement('p');
        latitude.innerText = `Latitude: ${lat}°`
        const longitude = document.createElement('p')
        longitude.innerText = `Longitude: ${lon}°`
        const userMood = document.createElement('p')
        userMood.innerText = `Mood: ${mood}`;
        const date = document.createElement('p');
        const dateString = new Date(timestamp).toLocaleString();
        date.innerText = `Date/time: ${dateString}`
        div.append(latitude, longitude, userMood, date)
        wrapper.append(div);
    });
}
getData();

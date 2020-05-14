if (navigator.geolocation) {
    console.log('Geolocation is supported by this browser.')
    navigator.geolocation.getCurrentPosition(position => {
        const latitude = document.querySelector('#latitude');
        const longitude = document.querySelector('#longitude');
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        latitude.textContent = (lat);
        longitude.textContent = (lon);


        const data = { lat, lon };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }
        console.log(options);
        console.log(data)
        fetch('/api', options);

    });

} else {
    console.log = "Geolocation is not supported by this browser.";
}

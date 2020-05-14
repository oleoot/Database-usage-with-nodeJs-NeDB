if (navigator.geolocation) {
    console.log('Geolocation is supported by this browser.')
    navigator.geolocation.getCurrentPosition(position => {
        const latitude = document.querySelector('#latitude');
        const longitude = document.querySelector('#longitude')
        latitude.innerText = (position.coords.latitude);
        longitude.innerText = (position.coords.longitude)
        console.log(position)
    });

} else {
    console.log = "Geolocation is not supported by this browser.";
}

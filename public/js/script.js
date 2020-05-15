function setup() {
    noCanvas();
    const video = createCapture(VIDEO)
    video.parent('video')
    const btn = document.querySelector('#submit');
    btn.addEventListener('click', submitForm);
    function submitForm() {
        if (navigator.geolocation) {
            console.log('Geolocation is supported by this browser.')
            navigator.geolocation.getCurrentPosition(async position => {
                const latitude = document.querySelector('#latitude');
                const longitude = document.querySelector('#longitude');
                const input = document.querySelector('#mood');
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const mood = input.value;
                video.loadPixels();
                const image64 = video.canvas.toDataURL();
                latitude.textContent = `${lat}°`;
                longitude.textContent = `${lon}°`;
                const data = { lat, lon, mood, image64 };
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data),
                }
                const response = await fetch('/api', options);
                const json = await response.json();
            });
        } else {
            console.log = "Geolocation is not supported by this browser.";
        }
    }

}

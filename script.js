// Camera Access
const videoElement = document.getElementById('camera');
const cameraStatus = document.getElementById('cameraStatus');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            videoElement.srcObject = stream;
            cameraStatus.textContent = "Camera access granted.";
            cameraStatus.classList.add('info');
        })
        .catch(err => {
            cameraStatus.textContent = "Error accessing camera: " + err;
            cameraStatus.classList.add('error');
        });
} else {
    cameraStatus.textContent = "Camera not supported on this device.";
    cameraStatus.classList.add('error');
}

// Microphone Access
const micElement = document.getElementById('microphone');
const micStatus = document.getElementById('micStatus');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            micElement.srcObject = stream;
            micStatus.textContent = "Microphone access granted.";
            micStatus.classList.add('info');
        })
        .catch(err => {
            micStatus.textContent = "Error accessing microphone: " + err;
            micStatus.classList.add('error');
        });
} else {
    micStatus.textContent = "Microphone not supported on this device.";
    micStatus.classList.add('error');
}

// Location Access
const locationStatus = document.getElementById('locationStatus');
const getLocationBtn = document.getElementById('getLocationBtn');

getLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            locationStatus.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
            locationStatus.classList.add('info');
        }, err => {
            locationStatus.textContent = "Error getting location: " + err.message;
            locationStatus.classList.add('error');
        });
    } else {
        locationStatus.textContent = "Geolocation not supported by this device.";
        locationStatus.classList.add('error');
    }
});

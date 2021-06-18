const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to video element, then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('oops, error here:', error);
    }
}

button.addEventListener('click', async () => {
    // disable button on click
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});


// Create a method to check if video is playing
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

// If the API is sharing a stream, open picture in picture
// Else re-prompt for stream source
button.addEventListener('click', async () => {
    if (videoElement.playing) await videoElement.requestPictureInPicture();
    else selectMediaStream();
});

// on load
selectMediaStream();
const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// propt to select media stream pass to video element, then play

const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // catch error
    console.log("error here!", error);
  }
};

button.addEventListener("click", async () => {
  // Disable button
  button.disabled = true;
  await videoElement.requestPictureInPicture();

  // reset
  button.disabled = false;
});

// load
selectMediaStream();

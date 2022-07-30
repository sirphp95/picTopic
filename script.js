
const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// comando para selecionar media stream e dar play
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play()
        }
    }
    catch(error){
        console.log('aconteceu um erro', error)
    }
}
button.addEventListener('click', async()=>
{
    // desativa o botao
    button.disabled = true
    // começa pic in pic
    await videoElement.requestPictureInPicture();
    // reseta botao
    button.disabled = false;
})

// liado
selectMediaStream()
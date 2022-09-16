let time = 3000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;

    function nextImage() {

        images[currentImageIndex].classList.remove("img-sobre")

        currentImageIndex++

        if(currentImageIndex >= max)
        currentImageIndex = 0

        images[currentImageIndex].classList.add("img-sobre")
    }

function start() {
    setInterval(() =>{
        nextImage()
        // troca de image
    }, time)
}   

window.addEventListener("load", start)
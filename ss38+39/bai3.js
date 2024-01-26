let overlay = document.getElementById("overlay");
let text = document.getElementById("text");
function applyBlur() {
    overlay.style.filter = 'blur(0px)';
    setTimeout(fadeIn, 2000);
}
function fadeIn() {
    let opacityValue = 0;
    function updateOpacity() {
        opacityValue += 0.01;
        overlay.style.opacity = opacityValue;
        text.style.opacity = opacityValue;
        text.innerHTML = Math.floor(opacityValue * 100) + '%';
        if (opacityValue < 1) {
            requestAnimationFrame(updateOpacity);
        } else {
            setTimeout(fadeOut, 2000);
        }
    }
    updateOpacity();
}
function fadeOut() {
    let opacityValue = 1;
    function updateOpacity() {
        opacityValue -= 0.01;
        overlay.style.opacity = opacityValue;
        text.style.opacity = opacityValue;
        text.innerHTML = Math.floor(opacityValue * 100) + '%';
        if (opacityValue > 0) {
            requestAnimationFrame(updateOpacity);
        }
    }
    updateOpacity();
}

applyBlur();
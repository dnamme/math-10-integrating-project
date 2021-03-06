function setRandomIcon() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = './img/icon/item' + (264 + Math.floor(Math.random() * 24)) + '.png';
    document.getElementsByTagName('head')[0].appendChild(link);
}

function firstInteraction() {
    $("#interact-screen").fadeOut(500);

    playOpening();

    var vid = document.getElementById("myVideo");
    vid.playbackRate = 0.75;
    vid.currentTime = 0;
    vid.play();
    vid.ontimeupdate = function() {
        if(vid.currentTime >= 4.8)
            vid.currentTime = 0;
    };
}

function playOpening() {
    if(audio.theme_opening.paused)
        audio.theme_opening.play();
}

function startGame() {
    $("#main-screen").fadeOut(250);

    document.getElementById("myVideo").pause();

    initializeAudio();
    loadTextures();

    frameNum = 0;
    frameDrawer = setInterval(drawFrame, 1000 / FPS);
}

function stopGame() {
    clearInterval(frameDrawer);
}


function transitionValue(start, end, frame = frameNum, maxFrames = maxFrameNum) {
    if(start == end) return start;
    return start + (frame / maxFrames) * (end - start);
}

function playClickSound() {
    if(!audio.click.paused)
        audio.click.currentTime = 0;
    else
        audio.click.play();
}

function playInvalidClickSound() {
    if(!audio.click_invalid.paused)
        audio.click_invalid.currentTime = 0;
    else
        audio.click_invalid.play();
}

function offsetGen(val, min, max, step) {
    if(val <= min)
        return min;
    else if(val >= max)
        return max;
    
    return val += step * (Math.floor(Math.random() * 3) - 1);
}
// target Html elements
var seconds = document.getElementById('seconds');
var milliseconds = document.getElementById('milliseconds');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var video = document.querySelector('.bg-video');

var sec = 0, millisec = 0;
var timeInterval;


// Function timer() will execute when start button is triggered
const timer = () => {
    millisec++;

    if(millisec < 9){
        milliseconds.innerHTML = "0" + millisec;
    }

    if(millisec > 9){
        milliseconds.innerHTML = millisec;
    }

    if(millisec > 99){
        sec++;
        seconds.innerHTML = "0" + sec;
        millisec = 0;
        milliseconds.innerHTML = "0" + 0;
    }

    if(sec > 9){
        seconds.innerHTML = sec;
    }
}

// Start button
start.addEventListener('click', () => {
    timeInterval = setInterval(timer, 10);
    video.play();
    
})

// Stop button
stop.addEventListener('click', () => {
    clearInterval(timeInterval);
    video.pause();

    
})

// Reset button
reset.addEventListener('click', () => {
    clearInterval(timeInterval);
    sec = '00';
    millisec = '00'
    seconds.innerHTML = sec;
    milliseconds.innerHTML = millisec; 

    video.currentTime = 0;
    video.pause();
})
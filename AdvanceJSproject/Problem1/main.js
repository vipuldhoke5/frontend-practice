(function showDate() {
    var todayDate = new Date()
    document.getElementById("dateContainer").innerText = todayDate.toDateString();
})()

function showTime() {
    var todayDate = new Date()
    var hours = todayDate.getHours()
    var minutes = todayDate.getMinutes()
    var seconds = todayDate.getSeconds()
    var session = "AM"

    if (hours == 0) {
        hours = 12
    } else if (hours > 12) {
        session = "PM"
        hours = hours - 12
    }


    hours = hours < 10 ? 0 + "" + hours : hours
    minutes = minutes < 10 ? 0 + "" + minutes : minutes
    seconds = seconds < 10 ? 0 + "" + seconds : seconds

    var clockTime = hours + ":" + minutes + ":" + seconds + ":" + session
    document.getElementById("clockContainer").innerText = clockTime;
}



var intervalRef;

function startClock() {
    intervalRef = setInterval(showTime, 1000)

}

function stopClock() {
    clearInterval(intervalRef)

}
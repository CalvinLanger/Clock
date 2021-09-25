let isTwentyFourHourFormat = false;
let clock = document.getElementById('clock');
let btn = document.getElementById('btn');


function setDate() {

    weekNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    currentDate = new Date();
    weekDay = weekNames[currentDate.getDay()];
    currentMonth = monthNames[currentDate.getMonth()];
    day = currentDate.getDate();
    year = currentDate.getFullYear();
    today = document.getElementById('todayDate');

    today.innerHTML = weekDay + " " + day + " " + currentMonth + " " + year;

};

function setTime() {

    currentDate = new Date();
    hours = prefixWithZero(moduloTwelve(currentDate.getHours()));
    minutes = prefixWithZero(currentDate.getMinutes());
    seconds = prefixWithZero(currentDate.getSeconds());
    session = getSession(currentDate);
    btn.innerHTML = getButtonName();
    clock.innerHTML = hours + ":" + minutes + ":" + seconds + session;

};

function getSession( currentDate) {
    if (isTwentyFourHourFormat) {
        return ""
    } else if(currentDate.getHours() > 12) {
        return " PM"
    } else {
        return " AM"
    }
}

function getButtonName() {
    return isTwentyFourHourFormat ? '24 Hours' : '12 Hours';
}

function changeFormat() {
    isTwentyFourHourFormat =! isTwentyFourHourFormat
}

function moduloTwelve(i) {
    if (!isTwentyFourHourFormat) {
    i = i % 12
    }
    return i
}

function prefixWithZero(i) {
   
    let y = i
    if (y < 10) {y = "0" + y}; 
    return y;
    
};


btn.addEventListener('click', changeFormat);
window.setInterval(setTime);
window.setInterval(setDate);







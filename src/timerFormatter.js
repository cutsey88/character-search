function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - (hours * 3600)) / 60);
    let seconds = time - (hours * 3600) - (minutes * 60);
    let hourFiller = hours >= 10 ? null : 0;
    let minuteFiller = minutes >= 10 ? null : 0;
    let secondFiller = seconds >= 10 ? null : 0;

    return { hours, minutes, seconds, hourFiller, minuteFiller, secondFiller };
}

export default formatTime;
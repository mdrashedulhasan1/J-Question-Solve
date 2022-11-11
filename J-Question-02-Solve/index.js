const alarmSet = document.getElementById('alarmSet');
alarmSet.addEventListener('click',setAlarm);
const ring = new Audio('./music.mp3');
function alarmRing(){
    ring.play();
}
function setAlarm(e){
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    const alarmTime = new Date(alarm.value);
    console.log(alarmTime);
    const currentTime = new Date();
    let timeToAlarm = alarmTime-currentTime;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(()=>{
            alarmRing();
        },timeToAlarm)
    }
}
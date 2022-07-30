let minute = 30 ;
let second = '00';

// Audio files
let click = new Audio('audio/click.mp3');
let bell = new Audio('audio/bell.mp3');

function template(){
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;
}
function start(){
    click.play();
    
    minute = 29;
    second = 59;

    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;

    const first_time = setInterval(firstTimerMinute, 60000);
    const second_time = setInterval(secondTimerSecond, 1000);

    if(minute<10){
        minute = '0' + minute;
    }

    if(second<10){
        second = '0'+ second;
    }

    function firstTimerMinute(){
        minute = minute-1
       
        document.getElementById('minute').innerHTML = minute;
    }
    function secondTimerSecond(){
        second = second-1
        document.getElementById('second').innerHTML = second;
      
        if(second<=0){
           
            if(minute<=0){
                clearInterval(firstTimerMinute);
                clearInterval(secondTimerSecond);
            document.getElementById('ok').innerHTML = 
            "Hey, Your Task Is Completed! Take A Break Now.";

                document.getElementById('ok').classList.add('show_success');

                bell.play();
            }
            second =60
        }
    }
}
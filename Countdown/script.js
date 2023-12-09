const daysel = document.getElementById('days');
const hoursel = document.getElementById('hours');
const mins= document.getElementById('mins');
const secondsel = document.getElementById('seconds');

const newYears="1 Jan 2024";
function countdown()
{
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const Totalseconds = (newYearDate-currentDate)/1000;

    const days = Math.floor((Totalseconds/3600)/24);
    const hours = Math.floor(Totalseconds/3600)%24;
    const minutes = Math.floor(Totalseconds/60)%60;
    const seconds = Math.floor(Totalseconds)%60;

    daysel.innerHTML=format(days);
    hoursel.innerHTML=format(hours);
    mins.innerHTML=format(minutes);
    secondsel.innerHTML=format(seconds);
}

function format(time)
{
    if(time<10)
    {
        return (`0${time}`);
    }
    else
    {
        return time;
    }
}

countdown();
setInterval(countdown,1000);
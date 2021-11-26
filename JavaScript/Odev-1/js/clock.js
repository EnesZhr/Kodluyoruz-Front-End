let fullName = prompt("Adınız nedir?")

let addName = document.querySelector("#myName")
addName.innerHTML = `${addName.innerHTML} ${fullName}`
const newTime = document.querySelector("#myClock")

function showTime() {
    
    const days = ["Pazar","Pazatesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let dayTime = new Date();
    let time = dayTime.getHours() + ":" + dayTime.getMinutes() + ":" + dayTime.getSeconds() 
    let day = days[dayTime.getDay()]
    
    newTime.innerHTML = `${time} ${day}`

    switch(true){
        case dayTime.getSeconds() == 0:
            newTime.classList.add ("bg-red");
            newTime.classList.remove ("txt-green");
            break;
        case dayTime.getSeconds() == 10:
            newTime.classList.add ("bg-blue");
            newTime.classList.remove ("bg-red");
            break;
        case dayTime.getSeconds() == 20:
            newTime.classList.add ("bg-green");
            newTime.classList.remove ("bg-blue");
            break;
        case dayTime.getSeconds() == 30:
            newTime.classList.add ("txt-red");
            newTime.classList.remove ("bg-green");
            break;
        case dayTime.getSeconds() == 40:
            newTime.classList.add ("txt-blue");
            newTime.classList.remove ("txt-red");
            break;
        case dayTime.getSeconds() == 50:
            newTime.classList.add ("txt-green");
            newTime.classList.remove ("txt-blue");
            break;
    }    
}


setInterval(showTime, 1000);
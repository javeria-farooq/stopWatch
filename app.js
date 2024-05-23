/*access HTML h1 elements */

let getHour = document.querySelector(".hour")
let getMin = document.querySelector(".minute")
let getSec = document.querySelector(".second")
let getMiliSec = document.querySelector(".mili-sec")

/*initialized JS variable */

let hours = 0
let minutes = 0
let seconds = 0
let miliSeconds = 0
let timer;

/*access HTML btns */

let startBtn = document.querySelector(".startBtn")
let pauseBtn = document.querySelector(".pauseBtn")
let resetBtn = document.querySelector(".resetBtn")

/*Define functions for stop watch */

function startFnc(){
    timer = setInterval(()=> {
       miliSeconds++

       if(miliSeconds < 10) {
        getMiliSec.innerHTML = `0${miliSeconds}` 
       }
       else{
        getMiliSec.innerHTML = miliSeconds
       }
       
       if(miliSeconds >= 100) {
        seconds++
        if(seconds < 10) {
            getSec.innerHTML = `0${seconds}` 
           }
        else{
            getSec.innerHTML = seconds
        }
        miliSeconds = 0

        
        if(seconds >=  60) {
            minutes++
            if(minutes < 10) {
                getMin.innerHTML = `0${minutes}`
            }
            else{
                getMin.innerHTML = minutes
            }
            seconds = 0

            
            if(minutes >= 60) {
                hours++
                if(hours < 10) {
                    getHour.innerHTML = `0${hours}`
                }
                else{
                    getHour.innerHTML = hours
                }
                minutes= 0
            }
        }
       }
       
    }, 10)
    startBtn.disabled = true
    startBtn.classList.add("disabled")
    pauseBtn.disabled = false
    pauseBtn.classList.remove("disabled")
}

/*invoke stop watch's functions */

startBtn.addEventListener("click", startFnc)

pauseBtn.addEventListener("click", ()=> {
    clearInterval(timer)
    startBtn.disabled = false
    startBtn.classList.remove("disabled")
    pauseBtn.disabled = true
    pauseBtn.classList.add("disabled")
})

resetBtn.addEventListener("click", ()=> {
    hours = 0
    minutes = 0
    seconds = 0
    miliSeconds = 0
    getHour.innerHTML = `0${hours}`
    getMin.innerHTML = `0${minutes}`
    getSec.innerHTML = `0${seconds}`
    getMiliSec.innerHTML = `0${miliSeconds}`
    startBtn.disabled = false
    pauseBtn.disabled = false
    startBtn.classList.remove("disabled")
    pauseBtn.classList.remove("disabled")
})
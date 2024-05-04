const horas = document.getElementById('horas')
const min = document.getElementById('min')
const seg = document.getElementById('seg')


const relogio = setInterval(function time(){
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let minu = dateToday.getMinutes()
    let segun = dateToday.getSeconds()

    if(hr < 10) hr = "0" + hr
    if(minu < 10) minu = "0" + minu
    if(segun < 10) segun = "0" + segun

    horas.textContent = hr
    min.textContent =  minu
    seg.textContent = segun

})
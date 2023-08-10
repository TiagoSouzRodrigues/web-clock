const hours = document.getElementById('horas')
const minutes = document.getElementById('minutos')
const seconds = document.getElementById('segundos')

const relogio = setInterval(function time(){
  let datetoday = new Date()
  let hrs = datetoday.getHours()
  let min = datetoday.getMinutes()
  let seg = datetoday.getSeconds()

  if (hrs < 10 ) hrs = '0'+ hrs
  if (min < 10 ) min = '0'+ min
  if (seg < 10 ) seg = '0'+ seg

  hours.textContent = hrs
  minutes.textContent = min
  seconds.textContent = seg

})

var hr = 0;
var min = 5;
var sec = 0;

var tempo = null;

function format() {
  if (hr < 1) {
    var format_timer = (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec);
  } else {
    var format_timer = (hr < 10 ? '0' + hr : hr) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec);
  }

  return format_timer;
}

function iniciar() {
  if (tempo === null) {
    tempo = setInterval(() => {
      timer();
    }, 1000);
  }
}

function pausar() {
  clearInterval(tempo);
  tempo = null;
}

function reiniciar() {
  hr = 0;
  min = 5;
  sec = 0;
  pausar();
  format();
}

function add(t) {
  min += t;
  if (sec > 60) {
    min++;
    sec -= 60;
  }
  if (min > 60) {
    min -= 60;
    hr++;
  }
  format();
}

function timer() {
  if (sec == 0 && hr == 0 && min == 0) {
    pausar();
  } else {
    sec--;
    if (sec < 0 && (hr || min > 0)) {
      sec = 59;
      min--;
      if (min < 0) {
        min = 59;
        hr--;
      }
    }
  }
  format();
}

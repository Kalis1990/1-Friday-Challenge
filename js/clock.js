function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  hour = updateTime(hour);
  min = updateTime(min);
  document.getElementById("time").innerText = hour + " : " + min;
    let t = setTimeout(function(){ currentTime() }, 1000); 
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime();
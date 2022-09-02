function currentDate() {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let currentDate = new Date();
    let Dayw = days[currentDate.getDay()];
    let Day = currentDate.getDate();
    let Month = months[currentDate.getMonth()];
    let Year = currentDate.getFullYear();
    document.getElementById("date").innerText = Dayw +" , " + Month+ " , " + Day + " , " + Year;
  }
  
  currentDate();
 
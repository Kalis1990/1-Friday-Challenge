function currentDate() {
    let currentDate = new Date();
    let Day = currentDate.getDate()
    let Month = currentDate.getMonth() + 1
    let Year = currentDate.getFullYear()
    document.getElementById("date").innerText = Day + " : " + Month+ " : " + Year;
  }
  
  currentDate();
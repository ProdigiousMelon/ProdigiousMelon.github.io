/* create a digital clock and put it in a box in javascript*/
function currentTime() {
    /*For the your time*/ 
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    /*For my time*/
    var dLA=d.toLocaleString("en-US",{timeZone:"America/LOS_ANGELES"});
    var mhour = dLA.getHours();
    var mmin = dLA.getMinutes();
    var msec = dLA.getSeconds();
    mhour = updateTime(mhour);
    mmin = updateTime(mmin);
    msec = updateTime(msec);

    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
    document.getElementById("my_clock").innerText = mhour + " : " + mmin + " : " + msec; /* adding time to the div */

    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime(); /* calling currentTime() function to initiate the process */
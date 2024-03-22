function calculate() {
  let ok = true;
  let time = document.getElementById("time").value;
  let timePattern = /^([0-9]?[0-9]):([0-5]?[0-9])$/;
  if (timePattern.test(time) != true) {
    ok = false;
    timePat.innerHTML = "Wrong time format. Correct is 99:59";
  } else {
    ok = true;
    timePat.innerHTML = "";
  }
  let laps = document.getElementById("laps").value;
  let lapsPattern = /^\d+:\d{2}\,\d{3}$/;
  if (lapsPattern.test(laps) != true) {
    ok = false;
    lapsPat.innerHTML = "Wrong time format. Correct is 9:59:999";
  } else {
    ok = true;
    lapsPat.innerHTML = "";
  }

  if (ok == true) {
    let timeArray = time.split(":");
    let timeMinutes = parseInt(timeArray[0]);
    let timeSeconds = parseInt(timeArray[1]);
    let timeResult = timeMinutes * 60 + timeSeconds;

    let lapsArray = laps.split(":");
    let lapsMinutes = parseInt(lapsArray[0]);
    let lapsSeconds = parseInt(lapsArray[1].split(",")[0]);
    let lapsMiliseconds = parseInt(lapsArray[1].split(",")[1]);
    let lapsResult = lapsMinutes * 60 + lapsSeconds + lapsMiliseconds / 1000;

    let stintLength = timeResult / lapsResult;
    let stint = Math.floor(stintLength);

    result.innerHTML = "Your stint length is\n" + stint + "\nlaps.";
  }
}
//Function version 0.3.0
let sCalendar = document.getElementById("sCalendar");
let lCalendar = document.getElementById("lCalendar");
let sYear = document.getElementById("sYear");
let result = document.getElementById("result");

const points2023 = {
  bahrain: { drivers: 26 * 22 + 6 * 8, constructors: 44 * 22 + 6 * 8 },
  saudiArabia: {
    drivers: 26 * 21 + 6 * 8,
    constructors: 44 * 21 + 6 * 8,
  },
  australia: { drivers: 26 * 20 + 6 * 8, constructors: 44 * 20 + 6 * 8 },
  azerbaijan: { drivers: 26 * 19 + 5 * 8, constructors: 44 * 19 + 5 * 8 },
  miami: { drivers: 26 * 18 + 5 * 8, constructors: 44 * 18 + 5 * 8 },
  imola: { drivers: 26 * 17 + 5 * 8, constructors: 44 * 17 + 5 * 8 },
  monaco: { drivers: 26 * 16 + 5 * 8, constructors: 44 * 16 + 5 * 8 },
  spain: { drivers: 26 * 15 + 5 * 8, constructors: 44 * 15 + 5 * 8 },
  canada: { drivers: 26 * 14 + 5 * 8, constructors: 44 * 14 + 5 * 8 },
  austria: { drivers: 26 * 13 + 4 * 8, constructors: 44 * 13 + 4 * 8 },
  greatBritain: {
    drivers: 26 * 12 + 4 * 8,
    constructors: 44 * 12 + 4 * 8,
  },
  hungary: { drivers: 26 * 11 + 4 * 8, constructors: 44 * 11 + 4 * 8 },
  belgium: { drivers: 26 * 10 + 3 * 8, constructors: 44 * 10 + 3 * 8 },
  netherlands: { drivers: 26 * 9 + 3 * 8, constructors: 44 * 9 + 3 * 8 },
  italy: { drivers: 26 * 8 + 3 * 8, constructors: 44 * 8 + 3 * 8 },
  singapore: { drivers: 26 * 7 + 3 * 8, constructors: 7 * 19 + 3 * 8 },
  japan: { drivers: 26 * 6 + 3 * 8, constructors: 44 * 6 + 3 * 8 },
  qatar: { drivers: 26 * 5 + 2 * 8, constructors: 44 * 5 + 2 * 8 },
  austin: { drivers: 26 * 4 + 8, constructors: 44 * 4 + 8 },
  mexico: { drivers: 26 * 3 + 8, constructors: 44 * 3 + 8 },
  brazil: { drivers: 26 * 2, constructors: 44 * 2 },
  lasVegas: { drivers: 26 * 1, constructors: 44 * 1 },
  abuDhabi: { drivers: 1, constructors: 1 },
};

function race() {
  let selectPlace = document.getElementById("selectPlace");
  let year = sYear.value;

  if (year === "2022") {
    result.innerHTML = "";
    sCalendar.removeAttribute("hidden");
    lCalendar.removeAttribute("hidden");
    sCalendar.innerHTML =
      '<option value="null" selected>-- Select race --</option><option value="bahrain">Bahrain</option><option value="saudiArabia">Saudi Arabia</option><option value="australia">Australia</option><option value="imola">Imola</option><option value="miami">Miami</option><option value="spain">Spain</option><option value="monaco">Monaco</option><option value="azerbaijan">Azerbaijan</option><option value="canada">Canada</option><option value="greatBritain">Great Britain</option><option value="austria">Austria</option><option value="france">France</option><option value="hungary">Hungary</option><option value="belgium">Belgium</option><option value="netherlands">Netherlands</option><option value="italy">Italy</option><option value="singapore">Singapore</option><option value="japan">Japan</option><option value="austin">Austin</option><option value="mexico">Mexico</option><option value="brazil">Brazil</option><option value="abuDhabi">Abu Dhabi</option>';
  } else if (year === "2023") {
    result.innerHTML = "";
    sCalendar.removeAttribute("hidden");
    lCalendar.removeAttribute("hidden");
    sCalendar.innerHTML =
      '<option value="null" selected>-- Select race --</option><option value="bahrain">Bahrain</option><option value="saudiArabia">Saudi Arabia</option><option value="australia">Australia</option><option value="azerbaijan">Azerbaijan (Sprint)</option><option value="miami">Miami</option><option value="imola">Imola</option><option value="monaco">Monaco</option><option value="spain">Spain</option><option value="canada">Canada</option><option value="austria">Austria (Sprint)</option><option value="greatBritain">Great Britain</option><option value="hungary">Hungary</option><option value="belgium">Belgium (Sprint)</option><option value="netherlands">Netherlands</option><option value="italy">Italy</option><option value="singapore">Singapore</option><option value="japan">Japan</option><option value="qatar">Qatar (Sprint)</option><option value="austin">Austin (Sprint)</option><option value="mexico">Mexico</option><option value="brazil">Brazil (Sprint)</option><option value="lasVegas">Las Vegas</option><option value="abuDhabi">Abu Dhabi</option>';
  } else {
    sCalendar.setAttribute("hidden", true);
    lCalendar.setAttribute("hidden", true);
  }
}

function champ() {
  let selectedIndex = sCalendar.selectedIndex;
  let selectedOption = sCalendar.options[selectedIndex];
  let resultText = "";
  let year = sYear.value;

  if (year === "2022") {
    let pointsDrivers = 26 * (22 - selectedIndex);
    let pointsConstructors = 44 * (22 - selectedIndex);
    resultText =
      "You need\n" +
      pointsDrivers +
      "\npoints for drivers champion title and\n" +
      pointsConstructors +
      "\npoints for constructors champion title.";
  } else if (year === "2023") {
    let raceName = selectedOption.value;
    let pointsDrivers = points2023[raceName].drivers;
    let pointsConstructors = points2023[raceName].constructors;
    resultText =
      "You need\n" +
      pointsDrivers +
      "\npoints for drivers champion title and\n" +
      pointsConstructors +
      "\npoints for constructors champion title.";
  }

  result.innerHTML = resultText;
}

function resetAll() {
  sYear.value = "null";
  race();
  result.innerHTML = "";
}
//Code version: 1.1.0
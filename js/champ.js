let raceData = null;

    fetch('points.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            raceData = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    function fetchSeason(year) {
        let raceSelect = document.getElementById(`race${year}`);
        raceSelect.innerHTML = "";
        
        let optionNull = document.createElement("option");
        optionNull.value = "null";
        optionNull.textContent = "-- Select race --";
        optionNull.setAttribute("selected", true);
        optionNull.setAttribute("disabled", true);
        raceSelect.appendChild(optionNull);

        const season = raceData ? raceData[year] : {};
        const raceKeys = Object.keys(season);

        for (let i = 0; i < raceKeys.length; i++) {
            let raceKey = raceKeys[i];
            let race = season[raceKey];

            let option = document.createElement("option");
            option.value = raceKey;
            option.textContent = race.name;
            raceSelect.appendChild(option);
        }
    }

    function showRaceData(year, raceElementId) {
        let selectedRaceKey = document.getElementById(raceElementId).value;

        if (selectedRaceKey === 'null') {
            result.style.color = "#f00";
            result.innerHTML = "You need to choose a race!";
            return;
        }

        const season = raceData ? raceData[year] : {};
        const selectedRace = season[selectedRaceKey];

        if (!selectedRace) {
            result.style.color = "#f00";
            result.innerHTML = "No data available for the selected race!";
            return;
        }

        const { drivers, constructors } = selectedRace;
        result.style.color = "#fff";
        result.innerHTML = `
            <h3>${selectedRace.name} ${year}</h3>
            <p>Points you need after this race to become champion:</p>
            <p>Drivers': ${drivers}</p>
            <p>Constructors': ${constructors}</p>`;
    }


    function points(){
        ppw.disabled = false;
        pp2.disabled = false;
    }

    function sprintBool(){
        if(spCheck.checked){
            sprint.classList.add("show");
            sprint.classList.remove("hide");
            sp1.classList.add("show");
            sp1.classList.remove("hide");
            sp2.classList.add("show");
            sp2.classList.remove("hide");
        } else {
            sprint.classList.add("hide");
            sprint.classList.remove("show");
            sp1.classList.add("hide");
            sp1.classList.remove("show");
            sp2.classList.add("hide");
            sp2.classList.remove("show");
        }
    }

    function polePosition(){
        if(pppCheck.checked){
            pppInput.classList.add("show");
            pppInput.classList.remove("hide");
        } else {
            pppInput.classList.add("hide");
            pppInput.classList.remove("show");
        }
    }

    function fastestLap(){
        if(flpCheck.checked){
            flpInput.classList.add("show");
            flpInput.classList.remove("hide");
        } else {
            flpInput.classList.add("hide");
            flpInput.classList.remove("show");
        }
    }

    function calc(){
        let races = parseInt(race.value) || 0;
        let win = parseInt(ppw.value) || 0;
        let second = parseInt(pp2.value) || 0;

        let sprints = (spCheck.checked) ? parseInt(sprint.value) || 0 : 0;
        let sprintWin = (spCheck.checked) ? parseInt(sp1.value) || 0 : 0;
        let sprintSecond = (spCheck.checked) ? parseInt(sp2.value) || 0 : 0;

        let polePosition = (pppCheck.checked) ? parseInt(pppInput.value) || 0 : 0;
        let fastestLap = (flpCheck.checked) ? parseInt(flpInput.value) || 0 : 0;

        let driversChampion = races * (win + polePosition + fastestLap) + sprints * sprintWin;

        let constructorChampion = races * (win + second + polePosition + fastestLap) + sprints * (sprintWin + sprintSecond);

        if(sprints > races){
            result.style.color = "#f00";
            result.innerHTML = "Number of sprints cannot be higher than number of races!";
        } else{
            result.style.color = "#fff";
            if(driversChampion && constructorChampion){
                result.innerHTML = "<h3>Custom season</h3>" + 
                "<p>Points you need to become champion before " + races +"\nraces to go:</p>" + 
                "<p>Drivers': " + driversChampion + "</p>" + 
                "<p>Constructors'" + constructorChampion + "</p>";
            }
        }
    }

    function season(){
        let season = seasons.value;

        if(season == 'null'){
            season2022.setAttribute("hidden", true);
            season2023.setAttribute("hidden", true);
            season2024.setAttribute("hidden", true);
            custom.setAttribute("hidden", true);
            result.style.color = "#f00";
            result.innerHTML = "You need to choose season!";
        } else if(season == '2022'){
            season2022.removeAttribute("hidden");
            season2023.setAttribute("hidden", true);
            season2024.setAttribute("hidden", true);
            custom.setAttribute("hidden", true);
            result.style.color = "#000";
            result.innerHTML = "";
            fetchSeason(2022);
        } else if(season == '2023'){
            season2022.setAttribute("hidden", true);
            season2023.removeAttribute("hidden");
            season2024.setAttribute("hidden", true);
            custom.setAttribute("hidden", true);
            result.style.color = "#000";
            result.innerHTML = "";
            fetchSeason(2023);
        } else if(season == '2024'){
            season2022.setAttribute("hidden", true);
            season2023.setAttribute("hidden", true);
            season2024.removeAttribute("hidden");
            custom.setAttribute("hidden", true);
            result.style.color = "#0f00";
            result.innerHTML = ""
            fetchSeason(2024);
        } else if(season == 'custom'){
            season2022.setAttribute("hidden", true);
            season2023.setAttribute("hidden", true);
            season2024.setAttribute("hidden", true);
            custom.removeAttribute("hidden");
            result.style.color = "#000";
            result.innerHTML = "";
        }
    }

//Code version 2.0.0
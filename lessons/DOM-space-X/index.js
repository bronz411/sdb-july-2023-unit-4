async function fetchSpaceXMissionData() {
  let url = "https://api.spacexdata.com/v3/missions";
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    displayMissionData(data);
  } catch (error) {
    console.error(error);
  }
}

async function displayMissionData(missions) {
  let containerElement = document.querySelector(".container");
  //display setup mission_name, description, and payload_ids
  missions.forEach((mission) => {
    //mission_name section
    let missionNameElement = document.createElement("h2");
    missionNameElement.textContent = mission.mission_name;
    //description section
    let descriptionElement = document.createElement("p");
    descriptionElement.textContent = mission.description;
    //payload_ids section. want them in ul
    let payloadIdElement = document.createElement("ul");
    mission.payload_ids.forEach((payload) => {
      let payloadElement = document.createElement("li");
      payloadElement.textContent = payload;
      payloadIdElement.appendChild(payloadElement);
    });
    // put it all on the page (HTML)
    containerElement.appendChild(missionNameElement);
    containerElement.appendChild(descriptionElement);
    containerElement.appendChild(payloadIdElement);
  });
}

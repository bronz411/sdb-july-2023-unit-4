/* 
Create a new button called launches. This button will use the following fetch URL.

url: https://api.spacexdata.com/v3/launches

Display the mission patch as an image tag
Display the mission name as H2 tag
Display details of the mission as p tag
Display the youtube url as a click able link that says "Click to View on Youtube"
*/

async function fetchSpaceXMissionLaunchData() {
  let url = "https://api.spacexdata.com/v3/launches";
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    displayMissionLaunchData(data);
  } catch (error) {
    console.error(error);
  }
}

async function displayMissionLaunchData(missionLaunches) {
  let containerElement = document.querySelector(".container");
  //create mission patch "img" links.mission_patch
  missionLaunches.forEach((launch) => {
    let missionPatchElement = document.createElement("img");
    missionPatchElement.src = launch.links.mission_patch;
    //create mission name "h2" mission_name
    let missionName = document.createElement("h2");
    missionName.textContent = launch.mission_name;
    //create details "p" details
    let missionDetails = document.createElement("p");
    missionDetails.textContent = launch.details;
    //create youtube url link
    let youtubeLinkContainer = document.createElement("a");
    youtubeLinkContainer.textContent = "Click to View on Youtube";
    youtubeLinkContainer.href = launch.links.video_link;
    //put stuff on page HTML});
    containerElement.appendChild(missionName);
    containerElement.appendChild(missionPatchElement);
    containerElement.appendChild(youtubeLinkContainer);
    containerElement.appendChild(missionDetails);
  });
}

// new button that clears the data and still allows you to grab the data again.

function clearData() {
  let clearContainerElement = document.querySelector(".container");
  clearContainerElement.innerHTML = "";
}

document.g;

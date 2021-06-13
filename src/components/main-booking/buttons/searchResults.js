export class SearchResults {
  constructor() {}

  renderForFlight() {
    const resultsField = document.querySelector(".results");
    
    const countryFrom = document.getElementById("flightPlace__from_country_select").value;
    const cityFrom = document.getElementById("flightPlace__from_city_select").value;
    const countryTo = document.getElementById("flightPlace__to_country_select").value;
    const cityTo = document.getElementById("flightPlace__to_city_select").value;
    
    const exampleLength = 3;

    for (let i = 0; i < exampleLength; i++) {
        resultsField.innerHTML += `
            <p>From: ${countryFrom} - ${cityFrom} | To: ${countryTo} - ${cityTo} /  Some information...</p>
        `;
    }

  }

  renderForLocation() {
    const currentRouteName = window.location.hash.slice(8)
    const resultsField = document.querySelector(".results");
    
    const locationCountry = document.getElementById("location__country_select").value;
    const locationCity = document.getElementById("location__city_select").value;
    
    const exampleLength = 4;

    if (currentRouteName == "hotels" ) {
        const hotelStar = document.getElementById("hotelStar__ammenties_select").value;
        for (let i = 0; i < exampleLength; i++) {
            resultsField.innerHTML += `
            <p>Location: ${locationCountry} - ${locationCity} | Hotel stars: ${hotelStar} /  Some information...</p>
            `;
        }
    } else if (currentRouteName == "cars") {
        const carSelect = document.getElementById("carsType__type_select").value;
        for (let i = 0; i < exampleLength; i++) {
          resultsField.innerHTML += `
            <p>Location: ${locationCountry} - ${locationCity} | Car type: ${carSelect} /  Some information...</p>
            `;
        }
    }
  }
}

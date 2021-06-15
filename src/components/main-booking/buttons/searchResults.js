import { History } from "../../main-history/history";
export class SearchResults {
  constructor() {
    this.history = new History();
  }


  renderBooking(id) {
    const currentRouteName = window.location.hash.slice(8);

    if (currentRouteName == "flights") {
      this.renderFlight(id);
    } else if (currentRouteName == "hotels") {
      this.renderHotel(id);
    } else if (currentRouteName == "cars") {
      this.renderCar(id);
    }
}

    renderFlight(id) {
      const resultsField = document.querySelector(".results");

      const flightCountryFrom = document.getElementById("flightPlace__from_country_select").value;
      const flightCityFrom = document.getElementById("flightPlace__from_city_select").value;
      const flightCountryTo = document.getElementById("flightPlace__to_country_select").value;
      const flightCityTo = document.getElementById("flightPlace__to_city_select").value;

      const flightDayStart = document.getElementById("flightDayStart").value;
      const flightDayEnd = document.getElementById("flightDayEnd").value;

      const startDayValue = new Date(flightDayStart);
      const flightStartDay = startDayValue.getDate();
      const flightStartMonth = startDayValue.getMonth();
      const flightStartYear = startDayValue.getFullYear();
      
      const finishDayValue = new Date(flightDayEnd);
      const flightFinishDay = finishDayValue.getDate();
      const flightFinishMonth = finishDayValue.getMonth();
      const flightFinishYear = finishDayValue.getFullYear();

      localStorage.setItem((`flightCountryFrom${id}`), flightCountryFrom);
      localStorage.setItem((`flightCityFrom${id}`), flightCityFrom);
      localStorage.setItem((`flightCountryTo${id}`), flightCountryTo);
      localStorage.setItem((`flightCityTo${id}`), flightCityTo);

      localStorage.setItem((`flightStartDay${id}`), flightStartDay);
      localStorage.setItem((`flightStartMonth${id}`), flightStartMonth);
      localStorage.setItem((`flightStartYear${id}`), flightStartYear);
      localStorage.setItem((`flightFinishDay${id}`), flightFinishDay);
      localStorage.setItem((`flightFinishMonth${id}`), flightFinishMonth);
      localStorage.setItem((`flightFinishYear${id}`), flightFinishYear);
      
      let exampleLength = 3;

      for (let i = 0; i < exampleLength; i++) {
        resultsField.innerHTML += `
            <p>From: ${flightCountryFrom} - ${flightCityFrom} | To: ${flightCountryTo} - ${flightCityTo} /  Some information...</p>
        `;
      }
        if (location.hash.slice(1) == "history") {
          this.history.renderFlight();
        }

    }

    renderHotel(id) {
      const resultsField = document.querySelector(".results");
      
      // const hotelDayStart = document.getElementById("hotelDayStart").value;
      // const hotelDayEnd = document.getElementById("hotelDayEnd").value;
      const hotelTypeSelect = document.getElementById("hotelTypeSelect").value;
      const hotelLocationCountry = document.getElementById("hotelLocationCountry").value;
      const hotelLocationCity = document.getElementById("hotelLocationCity").value;

      let exampleLength = 3;

      for (let i = 0; i < exampleLength; i++) {
        resultsField.innerHTML += `
        <p>Location: ${hotelLocationCountry} - ${hotelLocationCity} | Hotel stars: ${hotelTypeSelect} /  Some information...</p>
        `;
        }
        if (location.hash.slice(1) == "history") {
          this.history.renderHotel();
      }
    }
      
    renderCar(id) {
      const resultsField = document.querySelector(".results");

      // const carDayStart = document.getElementById("carDayStart").value;
      // const carDayEnd = document.getElementById("carDayEnd").value;
      const carTypeSelect = document.getElementById("carTypeSelect").value;
      const carLocationCountry = document.getElementById("carLocationCountry").value;
      const carLocationCity = document.getElementById("carLocationCity").value;

      let exampleLength = 3;

      for (let i = 0; i < exampleLength; i++) {
        resultsField.innerHTML += `
          <p>Location: ${carLocationCountry} - ${carLocationCity} | Car type: ${carTypeSelect} /  Some information...</p>
          `;
          }
          if (location.hash.slice(1) == "history") {
            this.history.render();
        } 
      }
}
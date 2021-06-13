import { BaseBooking } from "./baseBooking";
import { Location } from "./location/location"


export class Flight extends BaseBooking {
  constructor(element) {
    super();
    this.element = element;
    this.location = new Location();
  }

  render() {
    this.element.innerHTML = `
    <div class="flightDay">
        <div class="flightDay__start">
        <p>Start Date</p>
        <input type="date" class="flightDay__start_input" required max="2100-01-01" />
        </div>
        <div class="flightDay__end">
        <p>End Date</p>
        <input type="date" class="flightDay__end_input" required max="2100-01-01" />
        </div>
    </div>
    <div class="flightPlace">
        <p>From</p>
        <div class="flightPlace__from">
        <label for="flightPlace__from_country_select">Country</label>
        <select
            name="flightPlace__from_country_select"
            id="flightPlace__from_country_select"
        >
            <option></option>
        </select>
        <label for="flightPlace__from_city_select">City</label>
        <select
            name="flightPlace__from_city_select"
            id="flightPlace__from_city_select"
        >
        </select>
        </div>
        <p>To</p>
        <div class="flightPlace__to">
        <label for="flightPlace__to_country_select">Country</label>
        <select
            name="flightPlace__to_country_select"
            id="flightPlace__to_country_select"
        >
            <option></option>
        </select>
        <label for="flightPlace__to_city_select">City</label>
        <select
            name="flightPlace__to_city_select"
            id="flightPlace__to_city_select"
        >
        </select>
        </div>
    </div>
    <div class="formButtons">
        <button class="formButtons__item clear_button" id="clearButton">Clear</button>
        <button class="formButtons__item search_button" id="searchButton">Search</button>
    </div>
    `;
    this.BaseBookingSets();
    this.location.selectOptionFlight();
  }

}

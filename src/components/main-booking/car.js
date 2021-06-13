import { BaseBooking } from "./baseBooking";
import { Location } from "./location/location";

export class Car extends BaseBooking {
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
        <div class="carsType">
            <label for="carsType__type_select">Type</label>
            <select name="carsType__type_select" id="carsType__type_select">
            <option value="economy">economy</option>
            <option value="business">business</option>
            </select>
        </div>
        <div class="carsLocation">
            <p>Location</p>
            <label for="location__country_select">Country</label>
            <select
            name="location__country_select"
            id="location__country_select"
            >
              <option></option>
            </select>
            <label for="location__city_select">City</label>
            <select
            name="location__city_select"
            id="location__city_select"
            >
            </select>
        </div>
        <div class="formButtons">
            <button class="formButtons__item clear_button" id="clearButton">Clear</button>
            <button class="formButtons__item search_button" id="searchButton">Search</button>
        </div>
        <div class="results"></div>
        `;
        this.BaseBookingSets();
        this.location.selectLocation();
    }
  }
  
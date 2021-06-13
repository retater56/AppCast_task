import { BaseBooking } from "./baseBooking";
import { Location } from "./location/location";

export class Hotel extends BaseBooking {
  constructor(element) {
    super()
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
      <div class="hotelStar">
        <label for="hotelStar__ammenties_select">Ammenties</label>
        <select name="hotelStar__ammenties_select" id="hotelStar__ammenties_select">
            <option value="5">5 star</option>
            <option value="4">4 star</option>
            <option value="3">3 star</option>
            <option value="2">2 star</option>
            <option value="1">1 star</option>
        </select>
        </div>
        <div class="hotelLocation">
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
      `;
      this.BaseBookingSets();
      this.location.selectLocation();
  }
}

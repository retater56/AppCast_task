import { CheckDate } from "./date/date";
import { Location } from "./location/location";
import { Clear } from "./buttons/clear";
import { Search } from "./buttons/search";


export class Hotel {
  constructor(element) {
    this.element = element;
    this.date = new CheckDate();
    this.location = new Location();
    this.clear = new Clear();
    this.search = new Search();
  }

  render() {
    this.element.innerHTML = `
      <div class="flightDay">
          <div class="flightDay__start">
          <p>Start Date</p>
          <input type="date" class="flightDay__start_input" required />
          </div>
          <div class="flightDay__end">
          <p>End Date</p>
          <input type="date" class="flightDay__end_input" required />
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
        <label for="hotelLocation__country_select">Country</label>
        <select
            name="hotelLocation__country_select"
            id="hotelLocation__country_select"
        >
          <option></option>
        </select>
        <label for="hotelLocation__city_select">City</label>
        <select
            name="hotelLocation__city_select"
            id="hotelLocation__city_select"
        >
        </select>
        </div>
        <div class="formButtons">
            <button class="formButtons__item clear_button" id="clearButton">Clear</button>
            <button class="formButtons__item search_button" id="searchButton">Search</button>
        </div>
      `;
      this.date.setDate();
      this.location.selectLocation("hotelLocation__country_select", "hotelLocation__city_select");
      this.clear.clearFields();
      this.search.searchSetFields();
  }
}

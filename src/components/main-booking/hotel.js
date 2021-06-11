export class Hotel {
  constructor(element) {
    this.element = element;
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
            <option value="Belarus">Belarus</option>
            <option value="Germany">Germany</option>
        </select>
        <label for="hotelLocation__city_select">City</label>
        <select
            name="hotelLocation__city_select"
            id="hotelLocation__city_select"
        >
            <option value="Minsk">Minsk</option>
            <option value="Berlin">Berlin</option>
        </select>
        </div>
        <div class="formButtons">
            <button class="formButtons__item clear_button">Clear</button>
            <button class="formButtons__item search_button">Search</button>
        </div>
      `;
  }
}

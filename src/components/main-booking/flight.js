export class Flight {

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
    <div class="flightPlace">
        <p>From</p>
        <div class="flightPlace__from">
        <label for="flightPlace__from_country_select">Country</label>
        <select
            name="flightPlace__from_country_select"
            id="flightPlace__from_country_select"
        >
            <option value="Belarus">Belarus</option>
            <option value="Germany">Germany</option>
        </select>
        <label for="flightPlace__from_city_select">City</label>
        <select
            name="flightPlace__from_city_select"
            id="flightPlace__from_city_select"
        >
            <option value="Minsk">Minsk</option>
            <option value="Berlin">Berlin</option>
        </select>
        </div>
        <p>To</p>
        <div class="flightPlace__to">
        <label for="flightPlace__to_country_select">Country</label>
        <select
            name="flightPlace__to_country_select"
            id="flightPlace__to_country_select"
        >
            <option value="Belarus">Belarus</option>
            <option value="Germany">Germany</option>
        </select>
        <label for="flightPlace__to_city_select">Country</label>
        <select
            name="flightPlace__to_city_select"
            id="flightPlace__to_city_select"
        >
            <option value="Minsk">Minsk</option>
            <option value="Berlin">Berlin</option>
        </select>
        </div>
    </div>
    <div class="formButtons">
        <button class="formButtons__item clear_button">Clear</button>
        <button class="formButtons__item search_button">Search</button>
    </div>
    `
  }
}
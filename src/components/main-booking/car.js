export class Car {
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
        <div class="carsType">
            <label for="carsType__type_select">Type</label>
            <select name="carsType__type_select" id="carsType__type_select">
            <option value="economy">economy</option>
            <option value="business">business</option>
            </select>
        </div>
        <div class="carsLocation">
            <p>Location</p>
            <label for="carsLocation__country_select">Country</label>
            <select
            name="carsLocation__country_select"
            id="carsLocation__country_select"
            >
            <option value="Belarus">Belarus</option>
            <option value="Germany">Germany</option>
            </select>
            <label for="carsLocation__city_select">City</label>
            <select
            name="carsLocation__city_select"
            id="carsLocation__city_select"
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
  
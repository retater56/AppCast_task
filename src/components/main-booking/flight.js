
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
            <option>Choose country</option>
        </select>
        <label for="flightPlace__from_city_select">City</label>
        <select
            name="flightPlace__from_city_select"
            id="flightPlace__from_city_select"
        >
        <option>Choose city</option>
        </select>
        </div>
        <p>To</p>
        <div class="flightPlace__to">
        <label for="flightPlace__to_country_select">Country</label>
        <select
            name="flightPlace__to_country_select"
            id="flightPlace__to_country_select"
        >
            <option>Choose country</option>
        </select>
        <label for="flightPlace__to_city_select">City</label>
        <select
            name="flightPlace__to_city_select"
            id="flightPlace__to_city_select"
        >
        <option>Choose city</option>
        </select>
        </div>
    </div>
    <div class="formButtons">
        <button class="formButtons__item clear_button">Clear</button>
        <button class="formButtons__item search_button">Search</button>
    </div>
    `
    this.selectOption();
  }

  selectOption() {
    const flightFromCountry = document.getElementById('flightPlace__from_country_select');
    const flightToCountry = document.getElementById('flightPlace__to_country_select');
    const flightFromCity = document.getElementById('flightPlace__from_city_select');
    const flightToCity = document.getElementById('flightPlace__to_city_select');
    
    const cities = require('./countries.min.json');

    const urlCountries = 'https://restcountries.eu/rest/v2/all';

    const requestCountries = new XMLHttpRequest();

    requestCountries.open('GET', urlCountries, true);

    requestCountries.onload = function() {
        const dataCountries = JSON.parse(requestCountries.responseText);

        let option;

        function addOptionsCountry(data, selectCountry) {

            for (let i = 0; i < data.length; i++) {
                option = document.createElement('option');
                option.text = data[i].name;
                option.value = data[i].name;
                selectCountry.appendChild(option);
                }
        }

        addOptionsCountry(dataCountries, flightFromCountry);
        addOptionsCountry(dataCountries, flightToCountry);

        function addOptionsCity(countryChange, selectCity) {
            countryChange.addEventListener('change', () => {
    
                selectCity.innerHTML = "";
                
                if (cities[`${countryChange.value}`]) {
                    for (let i = 0; i < cities[`${countryChange.value}`].length; i++) {
                        option = document.createElement('option');
                        option.text = cities[`${countryChange.value}`][i];
                        option.value = cities[`${countryChange.value}`][i];
                        selectCity.add(option);
                    }
                } else {
                    console.log("Dont have");
                    return
                }
                
                console.log(selectCity.value);
                return
            })
            selectCity.addEventListener('change', () => {
                console.log(selectCity.value);
            })
        }

        addOptionsCity(flightFromCountry, flightFromCity);
        addOptionsCity(flightToCountry, flightToCity);
    }

    requestCountries.onerror = function() {
        console.error('An error occurred fetching the JSON from ' + url);
    };

    requestCountries.send();
  }
}
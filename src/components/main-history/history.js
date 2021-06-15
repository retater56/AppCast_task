export class History {
  constructor(element) {
    this.element = element;
  }

  render() {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    this.element.innerHTML = `
    <div class="history">
    </div>
    `

    let id = localStorage.getItem("searchId");
    
    for (let i = 1; i <= id; i++) {

      const flightCountryFrom = localStorage.getItem(`flightCountryFrom${[i]}`);
      const flightCityFrom =  localStorage.getItem(`flightCityFrom${[i]}`); 
      const flightCountryTo = localStorage.getItem(`flightCountryTo${[i]}`);
      const flightCityTo = localStorage.getItem(`flightCityTo${[i]}`);

      const flightStartDay = localStorage.getItem(`flightStartDay${[i]}`);
      const flightStartMonth = localStorage.getItem(`flightStartMonth${[i]}`);
      const flightStartYear = localStorage.getItem(`flightStartYear${[i]}`);
      const flightFinishDay = localStorage.getItem(`flightFinishDay${[i]}`);
      const flightFinishMonth = localStorage.getItem(`flightFinishMonth${[i]}`);
      const flightFinishYear = localStorage.getItem(`flightFinishYear${[i]}`);

      Number(flightStartMonth);
      Number(flightFinishMonth);

      const historySelect = document.createElement("div");
      historySelect.innerHTML += `
        ${month[flightStartMonth]} ${flightStartDay}, ${flightStartYear} - ${month[flightFinishMonth]} ${flightFinishDay}, ${flightFinishYear} , From: ${flightCityFrom} (${flightCountryFrom}) - To: ${flightCityTo} (${flightCountryTo})<p class="delete">X</p>
      `
      const historyLayout = document.querySelector(".history");
      historyLayout.appendChild(historySelect);
    }

  }
}
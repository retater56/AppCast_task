import { SearchResults } from "./searchResults";

export class Search {
  constructor() {
    this.searchResults = new SearchResults();
  }

  searchSetFields() {
    const searchButton = document.getElementById("searchButton");

    const bookingInputs = document.querySelectorAll("input");
    const bookingSelects = document.querySelectorAll("select");

    searchButton.addEventListener("click", () => {
      let validateFields = true;

      for (let i = 0; i < bookingInputs.length; i++) {
        if (
          bookingInputs[i].classList.contains("invalid") ||
          bookingInputs[i].value == ""
        ) {
          console.log("Warning!");
          return (validateFields = false);
        }
      }
      for (let i = 0; i < bookingSelects.length; i++) {
        if (bookingSelects[i].value == "") {
          console.log("Warning!");
          return (validateFields = false);
        }
      }

      console.log(validateFields);

      if (validateFields) {
        const resultsField = document.querySelector(".results")
        resultsField.innerHTML = "";
          if (bookingSelects.length == 4) {
            this.searchResults.renderForFlight();
          } else if (bookingSelects.length == 3) {
            this.searchResults.renderForLocation();
          } else {
            console.log("Some error");
          }
      }
    });
  }
}

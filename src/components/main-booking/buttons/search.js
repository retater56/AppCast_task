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

      const currentSearchNumber = 0;

      function checkSearchTry(searchId) {
        if (!localStorage.getItem("searchId", searchId)) {
          searchId++;
          searchId = localStorage.setItem("searchId", searchId);
        } else {
          searchId = localStorage.getItem("searchId", searchId);
          searchId++;
          searchId = localStorage.setItem("searchId", searchId);
        }
        searchId = localStorage.getItem("searchId");
        return searchId;
      }
      
      const searchId = checkSearchTry(currentSearchNumber);

      const currentRouteName = window.location.hash.slice(8);
      
      if (validateFields) {
        const resultsField = document.querySelector(".results")
        resultsField.innerHTML = "";
        if (currentRouteName == "flights") {
            this.searchResults.renderBooking(searchId);
        } else if (currentRouteName == "hotels") {
            this.searchResults.renderBooking(searchId);
        } else if (currentRouteName == "cars") {
            this.searchResults.renderBooking(searchId);
        } else {
            console.log("Some error");
          }
      }
    });
  }
}

export class Search {
  constructor() {}

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
        for (let i = 0; i < bookingInputs.length; i++) {
          console.log(bookingInputs[i].value);
        }
        for (let i = 0; i < bookingSelects.length; i++) {
          console.log(bookingSelects[i].value);
        }
      }
    });
  }
}

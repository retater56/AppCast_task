export class Clear {
  constructor() {}

  clearFields() {
    const clearButton = document.getElementById("clearButton");
    const bookingInputs = document.querySelectorAll("input");
    const bookingSelects = document.querySelectorAll("select");

    clearButton.addEventListener("click", () => {
      for (let i = 0; i < bookingInputs.length; i++) {
        bookingInputs[i].value = "";
      }

      for (let i = 0; i < bookingSelects.length; i++) {
        bookingSelects[i].value = "";
      }
    });
  }
}

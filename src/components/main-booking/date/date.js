export class CheckDate {
    constructor() {}

  setDate() {
      const date = new Date();
  
      const startDayInput = document.querySelector(".flightDay__start_input");
      const finishDayInput = document.querySelector(".flightDay__end_input");
  
      startDayInput.addEventListener("blur", () => {
        const startDay = new Date(startDayInput.value);
        const startDayCompare = startDay.getDate();
        const startMonthCompare = startDay.getMonth();
        const startYearCompare = startDay.getFullYear();

        const dateDayCompare = date.getDate();
        const dateMonthCompare = date.getMonth();
        const dateYearCompare = date.getFullYear();


  
        if (startYearCompare == dateYearCompare && startMonthCompare == dateMonthCompare) {
          if (startDayCompare >= dateDayCompare) {
            console.log("Okey");
            startDayInput.classList.remove("invalid");
            startDayInput.classList.add("valid");
          } else {
            console.log("Write correct date!")
            startDayInput.classList.remove("valid");
            startDayInput.classList.add("invalid");
          }
        } else if (startYearCompare == dateYearCompare && startMonthCompare >= dateMonthCompare) {
          console.log("Okey");
          startDayInput.classList.remove("invalid");
          startDayInput.classList.add("valid");
        } else if (startYearCompare == dateYearCompare && startMonthCompare <= dateMonthCompare) {
          console.log("Write correct date!")
          startDayInput.classList.remove("valid");
          startDayInput.classList.add("invalid");
        } else if (startYearCompare > dateYearCompare) {
          console.log("Okey");
          startDayInput.classList.remove("invalid");
          startDayInput.classList.add("valid");
        } else if (startYearCompare < dateYearCompare) {
          console.log("Write correct date!")
          startDayInput.classList.remove("valid");
          startDayInput.classList.add("invalid");
        };
      });
  
      finishDayInput.addEventListener("blur", () => {
        const startDay = new Date(startDayInput.value);
        const finishDay = new Date(finishDayInput.value);

        const startDayCompare = startDay.getDate();
        const startMonthCompare = startDay.getMonth();
        const startYearCompare = startDay.getFullYear();

        const finishDayCompare = finishDay.getDate();
        const finishMonthCompare = finishDay.getMonth();
        const finishYearCompare = finishDay.getFullYear();

        if (startYearCompare == finishYearCompare && startMonthCompare == finishMonthCompare) {
          if (startDayCompare <= finishDayCompare) {
            console.log("Okey");
            finishDayInput.classList.add("valid");
            finishDayInput.classList.remove("invalid");
          } else {
            console.log("Write correct finishDay!")
            finishDayInput.classList.add("invalid");
            finishDayInput.classList.remove("valid");
          }
        } else if (startYearCompare == finishYearCompare && startMonthCompare <= finishMonthCompare) {
          console.log("Okey");
          finishDayInput.classList.add("valid");
          finishDayInput.classList.remove("invalid");
        } else if (startYearCompare == finishYearCompare && startMonthCompare >= finishMonthCompare) {
            console.log("Write correct finishDay!")
            finishDayInput.classList.add("invalid");
            finishDayInput.classList.remove("valid");
        } else if (startYearCompare < finishYearCompare) {
          console.log("Okey");
          finishDayInput.classList.add("valid");
          finishDayInput.classList.remove("invalid");
        } else if (startYearCompare > finishYearCompare) {
          console.log("Write correct finishDay!")
          finishDayInput.classList.add("invalid");
          finishDayInput.classList.remove("valid");
        } else {
          console.log("Write correct startDay!")
          finishDayInput.classList.add("invalid");
          finishDayInput.classList.remove("valid");
        }
        
      });
    }
}
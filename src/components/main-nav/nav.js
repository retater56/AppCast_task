export class Nav {

  constructor(element) {
    this.element = element;
  }

  render() {
    this.element.innerHTML = `
    <div class="nav">
        <div class="nav__item"><a href="#search/flights">Flights</a></div>
        <div class="nav__item"><a href="#search/hotels">Hotels</a></div>
        <div class="nav__item"><a href="#search/cars">Cars</a></div>
    </div>
    `
  }
}
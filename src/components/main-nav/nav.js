export class Nav {

  constructor(element) {
    this.element = element;
  }

  render() {
    this.element.innerHTML = `
    <div class="nav">
        <div class="nav__item">Flights</div>
        <div class="nav__item">Hotels</div>
        <div class="nav__item">Cars</div>
    </div>
    `
  }
}
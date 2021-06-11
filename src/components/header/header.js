export class Header {

  constructor(element) {
    this.element = element;
  }

  render() {
    this.element.innerHTML = `
    <header class="header">
      <div class="header__item" id="search">Search</div>
      <div class="header__item" id="history">Search History</div>
    </header>
    `
  }
}

export class Header {

  constructor(element) {
    this.element = element;
  }

  render() {
    this.element.innerHTML = `
    <header class="header">
      <div class="header__item" id="search"><a href="#search">Search</a></div>
      <div class="header__item" id="history"><a href="#history">Search History</a></div>
    </header>
    `
  }
}

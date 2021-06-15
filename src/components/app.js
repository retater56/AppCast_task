import { Header } from "./header/header";
import { History } from "./main-history/history";
import { Nav } from "./main-nav/nav";
import { Flight } from "./main-booking/flight"
import { Hotel } from "./main-booking/hotel";
import { Car } from "./main-booking/car";

export class App {

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.initLayout();
        this.navLayout();
        this.initRouting();
    }

    initRouting() {
        window.onhashchange = () => {
            this.openPage();
          };
    }

    openPage() {
        const currentRouteName = window.location.hash.slice(1);
        const booking =  document.querySelector(".booking");
        switch (currentRouteName) {
            case 'search':
                this.navLayout();
                break;
            case 'history':
                this.historyLayout();
                break;
            case 'search/flights':
                booking.innerHTML = ""
                this.flight = new Flight(booking);
                this.flight.render();
                break;
            case 'search/hotels':
                booking.innerHTML = ""
                this.hotel = new Hotel(booking);
                this.hotel.render();
                break;
            case 'search/cars':
                booking.innerHTML = ""
                this.car = new Car(booking);
                this.car.render();
                break;
            default:
                this.initLayout();
                this.navLayout();
        }
    }

    initLayout() {
        this.header = new Header(this.rootElement);
        this.header.render();
        const main = document.createElement('div');
        main.classList.add('main');
        this.rootElement.appendChild(main);
        this.mainElement = document.querySelector('.main');
    }
    navLayout() {
        this.nav = new Nav(this.mainElement);
        this.nav.render();
        const booking = document.createElement('div');
        booking.classList.add('booking');
        this.mainElement.appendChild(booking);
    }

    historyLayout() {
        this.mainElement.innerHTML = "";
        this.history = new History(this.mainElement);
        this.history.render();
    }
}

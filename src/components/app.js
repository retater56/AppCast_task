import { Header } from "./header/header";
import { Nav } from "./main-nav/nav";
import { Flight } from "./main-booking/flight";
import { Hotel } from "./main-booking/hotel";
import { Car } from "./main-booking/car";

export class App {

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.initLayout();
        this.navLayout();
        this.bookingLayout();
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
        this.bookingElement = document.querySelector('.booking');
    }
    bookingLayout() {
        // this.booking = new Flight(this.bookingElement);
        // this.booking.render();
        // this.booking = new Hotel(this.bookingElement);
        // this.booking.render();
        this.booking = new Car(this.bookingElement);
        this.booking.render();

    }
}

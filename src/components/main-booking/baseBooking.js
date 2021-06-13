import { CheckDate } from "./date/date";
import { Clear } from "./buttons/clear";
import { Search } from "./buttons/search";

export class BaseBooking {
    constructor() {
        this.date = new CheckDate();
        this.clear = new Clear();
        this.search = new Search();
    }

    BaseBookingSets() {
        this.date.setDate();
        this.clear.clearFields();
        this.search.searchSetFields();
    }
}
export class History {
    constructor(element) {
        this.element = element;
    }

    render() {
        this.element.innerHTML = `
        <div class="history">
        </div>
        `
    }
}
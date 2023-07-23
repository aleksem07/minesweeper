import { createAndAppendElement } from "./util";
import { getRequest, url } from "../fetch";

const createMain = {
  elements: {
    body: document.querySelector("body"),
    main: null as HTMLElement | null,
    button: null as HTMLElement | null,
    h1: null as HTMLElement | null,
    div: null as HTMLElement | null,
    p: null as HTMLElement | null,
  },

  initMain() {
    this.elements.main = createAndAppendElement("main", "main");
    this.elements.body?.appendChild(this.elements.main);
  },

  async initGarage(pageCount: number) {
    let carsAll = 0;
    await getRequest("GET", url).then((data) => {
      carsAll = data.length;
      return carsAll;
    });
    //name
    this.elements.h1 = createAndAppendElement("h1", "garage-title");
    this.elements.h1.textContent = "My Garage";
    this.elements.main?.appendChild(this.elements.h1);

    //container car/page counter
    this.elements.div = createAndAppendElement(
      "div",
      "garage-counter-container"
    );
    this.elements.main?.appendChild(this.elements.div);
    //page numb
    this.elements.p = createAndAppendElement("p", "page-number");
    this.elements.p.textContent = `Page number ${pageCount}`;
    this.elements.div?.appendChild(this.elements.p);
    //all count car in base
    this.elements.p = createAndAppendElement("p", "database-counter");
    this.elements.p.textContent = `All cars ${carsAll}`;
    this.elements.div?.appendChild(this.elements.p);
  },

  initWinners() {
    //name
    this.elements.h1 = createAndAppendElement("h1", "garage-title");
    this.elements.h1.textContent = "Winners";
    this.elements.main?.appendChild(this.elements.h1);

    //container car/page counter
    this.elements.div = createAndAppendElement(
      "div",
      "garage-counter-container"
    );
    this.elements.main?.appendChild(this.elements.div);
    //page numb
    this.elements.p = createAndAppendElement("p", "page-number");
    this.elements.p.textContent = "Page number 1";
    this.elements.div?.appendChild(this.elements.p);
    //all count car in base
    this.elements.p = createAndAppendElement("p", "database-counter");
    this.elements.p.textContent = "All winners (1)";
    this.elements.div?.appendChild(this.elements.p);
  },

  clear() {
    if (this.elements.main) {
      this.elements.main.innerHTML = "";
    }
  },
};

export { createMain };
import {landingPage} from "../PageObject/landingPage"
import {customerArea} from "../PageObject/customerArea"


const lp = new landingPage();
const ca = new customerArea();

lp.Login("viacheslav.tsymbal+2fin@sixt.com","Qazwsx123");
expect(this.ca.isLoaded).toEqual(true);

import {landingPage} from "../pageObjects/landingPage"
import {customerArea} from "../pageObjects/CA"


const lp = new landingPage();
const ca = new customerArea();

lp.Login("viacheslav.tsymbal+2fin@sixt.com","Qazwsx123");
expect(this.ca.isLoaded).toEqual(true);

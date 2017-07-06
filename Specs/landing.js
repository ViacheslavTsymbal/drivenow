"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var landingPage_1 = require("../PageObject/landingPage");
var customerArea_1 = require("../PageObject/customerArea");
var lp = new landingPage_1.landingPage();
var ca = new customerArea_1.customerArea();
lp.Login("viacheslav.tsymbal+2fin@sixt.com", "Qazwsx123");
expect(this.ca.isLoaded).toEqual(true);

import {Helper} from "../helpers/helper"

export class customerArea {
    public helper = new Helper();

    private switch = element(by.id("switch"));
    private bmButton =  element(by.css('a[href*="/fi/en/customer/bonusminutes/private"]'))



    public isLoaded(){
        return this.helper.isDisplayed(this.bmButton)
    }

}
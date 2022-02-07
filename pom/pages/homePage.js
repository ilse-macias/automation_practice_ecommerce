import { Selector, t } from "testcafe";

class HomePage{
    constructor(){
        this.signInButton = Selector('.header_user_info')
    }

    async clickOnSignInButton(){
        await t
            .click(this.signInButton)    
    }
}

export default new HomePage
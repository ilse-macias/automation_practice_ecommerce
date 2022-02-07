import { Selector, t } from "testcafe";

class AuthenticationPage{
    constructor(){
        this.emailCreateAccountTextBox = Selector('#email_create')
        this.createAccountButton = Selector('#SubmitCreate')
    }

    async clickOnCreateAnAccountButton(){
        await t
            .typeText(this.emailCreateAccountTextBox, 'email@qa.team')
            .click(this.createAccountButton);
    }
}

export default new AuthenticationPage
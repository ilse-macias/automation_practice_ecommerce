import { Selector, t } from "testcafe";

class AuthenticationPage{
    constructor(){
        //Create Account
        this.emailCreateAccountTextBox = Selector('#email_create')
        this.createAccountButton = Selector('#SubmitCreate')

        //Already Registred?
        this.emailRegistredTextBox = Selector('#email')
        this.passwordRegistredTextBox = Selector('#passwd')
        this.signInButton = Selector('#SubmitLogin')
    }

    async clickOnCreateAnAccountButton(){
        await t
            .typeText(this.emailCreateAccountTextBox, 'email@qa.team')
            .click(this.createAccountButton);
    }

    async clickOnSignInButton(){
        await t
            .typeText(this.emailRegistredTextBox, 'email@qa.team')
            .typeText(this.emailRegistredTextBox, '123456')
            .click(this.signInButton)
    }
}

export default new AuthenticationPage
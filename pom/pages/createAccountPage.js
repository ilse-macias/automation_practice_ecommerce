import { Selector, t } from "testcafe";

class CreateAccountPage{
    constructor(){
        //Personal Info
        this.firstNameTextBox = Selector('#customer_firstname')
        this.lastNameTextBox = Selector('#customer_lastname')
        this.passwordTextBox = Selector('#passwd')

        //Address
        this.firstNameAddressTextBox = Selector('#firstname')
        this.lastNameAddressTextBox = Selector('#lastname')
        this.addressTextBox = Selector('#address1')
        this.cityTextBox = Selector('#city')
        this.stateTextBox = Selector('#id_state') 
        this.stateOption = Selector('option').withText('California')
        this.zipCodeTextBox = Selector('#postcode')
        this.countryTextBox = Selector('#')
        this.mobilePhoneTextBox = Selector('#phone_mobile')
        this.referenceTextBox = Selector('#alias')

        this.registerButton = Selector('#submitAccount')
    }

    async personalInformationFillOut(){
        await t
            .typeText(this.firstNameTextBox, 'Ramona')
            .typeText(this.lastNameTextBox, 'López')
            .typeText(this.passwordTextBox, '123456')
            .typeText(this.addressTextBox, '9000 Flores Ave.')
            .click(this.stateTextBox)
                .click(this.stateOption)
            .typeText(this.zipCodeTextBox, '91911')
            .typeText(this.mobilePhoneTextBox, '858-900-7812')
            .typeText(this.referenceTextBox, 'Juan Martínez')
    }

}

export default new CreateAccountPage
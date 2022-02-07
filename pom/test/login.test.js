import { Selector, t } from "testcafe"; //import the test cafe and object to use it
import AuthenticationPage from "../pages/authenticationPage";
import CreateAccountPage from "../pages/createAccountPage";
import HomePage from '../pages/homePage'
//define a feature

fixture("Create an account")
    .page `http://automationpractice.com/`
    
//HomePage
test('Create a new account successfully', async t =>{
    await t
        .maximizeWindow()
    await HomePage
        .clickOnSignInButton()
     await AuthenticationPage
        .clickOnCreateAnAccountButton()
    await CreateAccountPage
        .personalInformationFillOut()

    })



/*
1. Create account
2. Log in
3. Search a product
4. Best Seller - Sort a product
5. Filter products
6. Add a product on cart
7. My order account
*/
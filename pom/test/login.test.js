import { Selector, t } from "testcafe"; //import the test cafe and object to use it
import AuthenticationPage from "../pages/authenticationPage";
import CreateAccountPage from "../pages/createAccountPage";
import HomePage from '../pages/homePage'
//define a feature

fixture("Create an account")
    .page `http://automationpractice.com/`
    .beforeEach(async t =>{
        await t
        .maximizeWindow()
    })

test('Create a new account successfully', async t =>{
    await HomePage
        .clickOnSignInButton()
     await AuthenticationPage
        .clickOnCreateAnAccountButton()
    await CreateAccountPage
        .personalInformationFillOut()
})

test('Login successfully', async t =>{
    await HomePage
        .clickOnSignInButton()
    await AuthenticationPage
        .clickOnSignInButton()
})




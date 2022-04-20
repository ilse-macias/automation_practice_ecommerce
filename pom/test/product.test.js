import { Selector, t } from "testcafe"; //import the test cafe and object to use it

import HomePage from '../pages/homePage'
//define a feature

fixture("Create an account")
    .page `http://automationpractice.com/`
    .beforeEach(async t =>{
        await t
        .maximizeWindow()
    })

test('Search a product from home page', async t=>{
    await HomePage
        .searchAProduct()
})
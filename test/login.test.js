import { Selector, t } from "testcafe"; //import the test cafe and object to use it
//define a feature

fixture("Create an account")
    .page `http://automationpractice.com`
    
//HomePage
test('Create an account with a valid email', async t =>{
    await t
        .click('.login') //homepage
        .maximizeWindow()
        .typeText('#email_create', 'demo@qa.team')
        .click('.icon-user.left')
        //insert assert
})


//Login page
test('Leave email field empty', async t =>{
    await t 
        .click('.login') //homepage
        .maximizeWindow()
        .click('.icon-user.left')
     //insert assert
})

//Create account
test('Create a new account', async t =>{
    await t
        .typeText('#customer_firstname', 'Demo')
        .typeText('#customer_lastname', 'QA')
        .typeText('#email', 'demo@qa.team.com')
        .typeText('#passwd', '12345')
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
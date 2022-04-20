import { Selector, t } from "testcafe";

class HomePage{
    constructor(){
        this.signInButton = Selector('.header_user_info')

        this.searchBar = Selector('input').withAttribute('id', 'search_query_top')
        this.searchIcon = Selector('button').withAttribute('name', 'submit_search')
    }

    async clickOnSignInButton(){
        await t
            .click(this.signInButton)
    }

    async searchAProduct(){
        await t
            .typeText(this.searchBar, 'blouse')
            .click(this.searchIcon)
    }
}

export default new HomePage
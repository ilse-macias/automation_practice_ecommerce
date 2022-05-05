import { Selector, t } from "testcafe";

class HomePage{
    constructor(){
        this.signInButton = Selector('.header_user_info')

      //  this.searchBar = Selector('input').withAttribute('id', 'search_query_top') //option A
        this.searchIcon = Selector('button').withAttribute('name', 'submit_search')
    }

    get getSearchBar(){ //This is the another way to get the selectors
        return Selector("input[id='search_query_top']")
    }

    async clickOnSignInButton(){
        await t
            .click(this.signInButton)
    }

    async searchAProduct(product){
        await t
            .typeText(this.getSearchBar, product)
            .click(this.searchIcon)
    }
}

export default new HomePage
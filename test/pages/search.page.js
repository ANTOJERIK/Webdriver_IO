import Page from './page';
class Searchpage extends Page{
    get searchInput() {
        return $('#twotabsearchtextbox');
    }

    get searchBtn() {
        return $('#nav-search-submit-button');
    }
    get Category() {
        return $('#searchDropdownBox option:nth-child(16)');
    }

    open() {
        super.open('https://www.amazon.in/');
    }
}

export default new Searchpage();



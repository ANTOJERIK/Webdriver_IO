import SearchPage from '../pages/search.page';


describe('Amazon Product Search', () => {
    it('should open the main url and verify the title', () => {
        SearchPage.open();
        expect(browser).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');

    });

    it('should search for an product and verify the search text value', () =>{
        SearchPage.searchInput.addValue('Laptop');
        SearchPage.searchBtn.click();

        expect(SearchPage.searchInput).toHaveValue('Laptop')
    });

    it('should redirect to a new page and verify the title', () => {
        expect(browser).toHaveTitle('Amazon.in : Laptop');

    })

    it('should update the search category', () => {

        expect(SearchPage.Category).toHaveText("Computers & Accessories");
    })
});

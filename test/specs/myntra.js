describe('Myntra page', () => {
    it('should show the banner container', () => {
        browser.url('https://www.myntra.com/');
        const banner = $("picture.img-responsive");
        expect(banner).toBeDisplayed()
        
    });

    it('should contain link on banner button', () =>{
        const shopButton = $('picture.img-responsive');
        expect(shopButton).toHaveLinkContaining('https://www.myntra.com/myntra-fashion-store?plaEnabled=false&rf=Discount%20Range%3A30.0_100.0_30.0%20TO%20100.0');
        expect(shopButton).toBeClickable();

    });
    
});
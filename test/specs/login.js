import { expect } from 'chai';
import LoginPage from '../pages/login.page';

describe('Login Amazon Website', () => {
    it('should open the main url and verify the title', () => {
        LoginPage.open();
        expect(browser).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');

    });

    it('Click on support Link', () => {
        LoginPage.supportlink.waitForDisplayed();
        LoginPage.supportlink.click();

        expect(LoginPage.supportlink).toHaveLinkContaining('/signin');
    });

    it('Enter the user name', () => {
        LoginPage.username.waitForDisplayed();
        LoginPage.username.setValue('8122243621');
        
    });
/*
    it('Click on continue', () => {
        LoginPage.continue.waitForDisplayed();
        LoginPage.continue.click();
        
    });

    it('Enter the password', () => {
        LoginPage.password.waitForDisplayed();
        LoginPage.password.click('Aojk1314!');
        
    });

    it('Click on SignIN', () => {
        LoginPage.signin.waitForDisplayed();
        LoginPage.signin.click();
        
    });
   */ 
});
import Page from './page';

class Loginpage extends Page{
    get supportlink() { 
        return $("//span[@id='nav-link-accountList-nav-line-1']")
    }
    get username() {
         return $("//input[@id='ap-credential-autofill-hint']")
        }
    /*get continue() { 
        return $("//input[@id='continue']")
    }
    get password() { 
        return $("//input[@id='ap password']")
    }
    get signin() 
    { 
        return $("//input[@id='signInSubmit']")
    }

    open1() {
        super.open('https://www.amazon.in/');
    }*/
}

export default new Loginpage();

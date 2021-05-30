import BaseUtils from '../Utilities/baseUtils';
import LoginObj from '../pageobject/loginobj';
import LoginData from '../test_data/logindata';
import Url from '../urls';


class LoginFB{
    get EMAIL(){
        return $(LoginObj.Login);
    }

    get PASSWORD(){
        return $(LoginObj.password);
    }

    get LOGINBTN(){
        return $(LoginObj.loginBtn);
    }

    FBLogin(){
        browser.url(Url.loginurl);
        BaseUtils.toaddValue(this.EMAIL,LoginData.userData);
        BaseUtils.toaddValue(this.PASSWORD,LoginData.passData);
        BaseUtils.CliBtn(this.LOGINBTN);
    }
}
module.exports = new LoginFB();
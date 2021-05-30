import FBLogin from '../page/login';

describe('My Login application', () => {
    it('should login with valid credentials',() => {
        FBLogin.FBLogin();   
    });
});
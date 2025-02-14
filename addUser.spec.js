const { test, expect } = require("@playwright/test"); 
const { loginDetails } = require('./scopeXobjects/loginObject');
const { ScopeXLogin } = require('./scopeXclass/login');

test('addUser', async ({ page }) => {
    const loginPage = new ScopeXLogin(page);
    await loginPage.goto();
    await loginPage.validLogin(loginDetails);

});

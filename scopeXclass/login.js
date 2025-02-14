class ScopeXLogin {
    constructor(page) {
        this.page = page;

        // Login elements
        this.loginEmail = page.getByLabel('Email');
        this.loginPassword = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', { name: 'Log in' });

        // Add Recipient elements
        this.clickRecipients = page.getByRole('button', { name: 'Recipients' });
        this.clickAddRecipient = page.getByRole('link', { name: 'Add Recipient' });
        this.addRecipientName = page.getByPlaceholder('Enter recipient name');
        this.addRecipientNickName = page.getByPlaceholder('Enter recipient nick name');
        this.addRecipientBankAccountNumber = page.getByPlaceholder('Enter bank account number');
        this.addRecipientIFSC = page.getByPlaceholder('Enter IFSC code');
        this.addRecipientSubmit = page.getByRole('button', { name: 'Submit' });

        // Navigation & Logout
        this.navigation = page.getByRole('navigation').getByRole('button');
        this.logout = page.getByRole('menuitem', { name: 'Log out' });
    }

    async goto() {
        await this.page.goto('https://scopex.money/Login');
    }

    async validLogin(loginDetails) {
        await this.loginEmail.fill(loginDetails.loginEmail);
        await this.loginPassword.fill(loginDetails.loginPassword);
        await this.loginButton.click();
    }

    async addRecipient(recipientDetails) {
        await this.clickRecipients.click();
        await this.clickAddRecipient.click();
        await this.addRecipientName.fill(recipientDetails.recipientName);
        await this.addRecipientNickName.fill(recipientDetails.recipientNickName);
        await this.addRecipientBankAccountNumber.fill(recipientDetails.recipientBankAccountNumber);
        await this.addRecipientIFSC.fill(recipientDetails.recipientIFSC);
        await this.addRecipientSubmit.click();
    }

    async logoutUser() {
        await this.navigation.click();
        await this.logout.click();
    }
}

module.exports = { ScopeXLogin };

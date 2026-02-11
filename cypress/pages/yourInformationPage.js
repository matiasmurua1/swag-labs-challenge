class yourInformationPage {
    elements = {
        firstNameInput: () => cy.get('#first-name'),
        lastNameInput: () => cy.get('#last-name'),
        postalCodeInput: () => cy.get('#postal-code'),
        continueButton: () => cy.get('#continue')
    }

    setFirstName(firstName){
        this.elements.firstNameInput().type(firstName);
    }
    setLastName(lastName){
        this.elements.lastNameInput().type(lastName);
    }
    setPostalCode(postalCode){
        this.elements.postalCodeInput().type(postalCode);
    }
    clickContinueButton(){
        this.elements.continueButton().click();
    }
}
export default yourInformationPage;
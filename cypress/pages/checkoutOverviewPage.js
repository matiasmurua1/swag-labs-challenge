class checkoutOverviewPage {
    elements = {
        titleInformation: () => cy.get('.title'),
        buttonFinish: () => cy.get('#finish'),
        messageOrderSuccess: () => cy.get('.complete-header'),
        inventoryItemName: () => cy.get('.inventory_item_name')
    }
    getTitleInformation(){
        return this.elements.titleInformation();
    }
    clickButtonFinish(){
        return this.elements.buttonFinish().click();
    }
    getMessageOrderSuccess(){
        return this.elements.messageOrderSuccess();
    }
    getInventoryItemName(){
        return this.elements.inventoryItemName();
    }    
}
export default checkoutOverviewPage;
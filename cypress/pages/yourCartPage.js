class YourCartPage {
    elements = {
        inventoryItemName: () => cy.get('.inventory_item_name'),
        buttonCheckout: () => cy.get('#checkout'),
        buttonCart: () => cy.get('.shopping_cart_link'),
        buttonRemove: () => cy.get('#remove-sauce-labs-backpack')
    }
    getInventoryItemName(){
        return this.elements.inventoryItemName();
    }
    clickButtonCheckout(){
        return this.elements.buttonCheckout().click();
    }
    clickButtonCart(){
        return this.elements.buttonCart().click();
    }
    clickButtonRemove(){
        return this.elements.buttonRemove().click();
    }
}

export default YourCartPage;
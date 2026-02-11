class HomePage {
    elements = {
        logoSwagLabs: () => cy.get('.app_logo'),
        buttonAddToCart: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        inventoryItemName: () => cy.get('.inventory_item_name')
    }

    clickAddToCart(){
        this.elements.buttonAddToCart().click();
    }
    getlogoSwagLabs(){
        return this.elements.logoSwagLabs();
    }
    getInventoryItemName(){
        return this.elements.inventoryItemName();
    }
}
export default HomePage;
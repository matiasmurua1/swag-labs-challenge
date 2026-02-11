import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MercadoLibreAPI from "../../services/mercadoLibreApi";

const mercadoLibreAPI = new MercadoLibreAPI();

When("realizo una petición GET al endpoint de mercado libre", () => {
mercadoLibreAPI.getDepartaments().then((response) => {
            cy.wrap(response).as("getDepartamentsResponse");
        });
})

Then("se valida que la respuesta sea exitosa con un status code 200", () => {
    cy.get("@getDepartamentsResponse").then((response) => {
        expect(response.status).to.eq(200);
    });
});

Then("la respuesta debe contener una lista de departments", () => {
    cy.get("@getDepartamentsResponse").then((response) => {
        expect(response.body).to.have.property("departments");
        expect(response.body.departments).to.be.an("array");
    });
});
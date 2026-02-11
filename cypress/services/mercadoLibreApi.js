
class MercadoLibreAPI {

    constructor() {
        this.HOST = "https://www.mercadolibre.com.ar/menu";
        this.path = "/departments";
        this.headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        };
    }

    // ✅ GET - Obtener departamentos por ID
    getDepartaments() {
        cy.log("🔍 GET Departament: " + `${this.HOST}${this.path}`);

        return cy
            .api({
                method: "GET",
                url: `${this.HOST}${this.path}`,
                headers: this.headers,
                failOnStatusCode: false,
            })
            .as("responseGetDepartaments")
            .then((response) => {
                return response;
            });
    }
}
export default MercadoLibreAPI;
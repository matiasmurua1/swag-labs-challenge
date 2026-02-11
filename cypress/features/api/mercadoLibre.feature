Feature: Validación del servicio de departments de Mercado Libre

@PASS
Scenario: Validar que en el endpoint de mercado libre exista departments
  When realizo una petición GET al endpoint de mercado libre
  Then se valida que la respuesta sea exitosa con un status code 200
  And la respuesta debe contener una lista de departments

FRAMEWORK DE AUTOMATIZACION - SWAG LABS

QUE ES

Framework BDD para pruebas End-to-End web Y API  usando Cypress y Cucumber.
Implementa Page Object Model con generacion de reportes HTML.

REQUISITOS

- Node.js 16+
- npm 8+
- Chrome instalado
- Visual Studio Code (opcional)

INSTALACION RAPIDA

git clone [URL-del-repositorio]
cd swag-labs-challenge
npm install

COMANDOS PRINCIPALES

npm run test              Ejecutar pruebas en modo headless
npm run test:open        Abrir interfaz interactiva de Cypress
npm run test:report      Ejecutar pruebas y generar reporte HTML

ESTRUCTURA DETALLADA DEL PROYECTO

swag-labs-challenge/
│
├── cypress/                              Directorio principal de Cypress
│   │
│   ├── features/                         Casos de prueba en formato Gherkin
│   │   ├── api/
│   │   │   └── mercadoLibre.feature    Pruebas de API MercadoLibre
│   │   │
│   │   └── front/                      Pruebas de interfaz de usuario
│   │       ├── login.feature           Casos de prueba de login
│   │       └── shoppingCart.feature    Casos de compra y carrito
│   │
│   ├── pages/                           Page Object Model - Encapsulacion de elementos
│   │   ├── homePage.js                 Elementos y acciones de pagina principal
│   │   ├── loginPage.js                Elementos y acciones de login
│   │   ├── yourCartPage.js             Elementos y acciones del carrito
│   │   ├── yourInformationPage.js      Elementos y acciones de informacion personal
│   │   └── checkoutOverviewPage.js     Elementos y acciones de resumen de compra
│   │
│   ├── steps_definitions/               Definicion de pasos Gherkin a codigo
│   │   ├── api/
│   │   │   └── mercadoLibre.js         Implementacion de pasos API
│   │   │
│   │   └── front/
│   │       ├── common.js               Pasos comunes compartidos
│   │       └── shoppingCart.js         Pasos de compra y carrito
│   │
│   ├── services/                        Servicios para llamadas a APIs externas
│   │   └── mercadoLibreApi.js          Cliente HTTP para MercadoLibre API
│   │
│   ├── support/                         Configuracion y utilidades globales
│   │   ├── commands.js                 Comandos personalizados de Cypress
│   │   └── e2e.js                      Configuracion inicial para pruebas
│   │
│   ├── reports/                         Reportes generados automaticamente
│   │   └── json/
│   │       └── cucumber_report.json    Reporte en formato JSON
│   │
│   └── screenshots/                     Screenshots de fallos generados automaticamente (Ejecutar  script npm run test para visualizar screenshot actualizado )
│       └── front/
│           └── login.feature/
│
├── jsonlogs/                            Logs del sistema
│   ├── log.json                         Log en formato JSON
│   └── messages.ndjson                 Log en formato NDJSON
│
├── node_modules/                        Dependencias instaladas (ignorar en Git)
│
├── .vscode/                             Configuracion de Visual Studio Code
│
├── cypress.config.js                    Configuracion principal de Cypress
├── package.json                         Dependencias y scripts del proyecto
├── package-lock.json                    Lock de dependencias (ignorar en Git)
├── .gitignore                           Archivo de exclusiones para Git
├── .cypress-cucumber-preprocessorrc.json Configuracion del preprocessor
├── cucumber-report.html                 Reporte HTML principal generado
└── README.md                            Explicacion proyecto

CARACTERISTICAS

- Pruebas BDD con Cucumber Preprocessor
- Patron Page Object Model
- Reportes HTML automaticos
- Pruebas API integradas
- Screenshots en fallos
- Validacion de codigo con ESLint

TECNOLOGIAS

Cypress, Cucumber, Node.js, ESLint, Multiple Cucumber HTML Reporter

MEJORES PRACTICAS ISTQB

- Estructura Given, When, Then (AAA)
- Escenarios independientes
- Nombres descriptivos y claros
- Pruebas de UI y API separadas
- Reportes detallados con screenshots

GENERAR REPORTE

npm run test:report

El reporte HTML se genera en cucumber-report.html

AUTOR: MURUA MARTINEZ MATIAS NAHUEL
Email: murua.matias.96@gmail.com

Version 1.0.0 - Febrero 2026
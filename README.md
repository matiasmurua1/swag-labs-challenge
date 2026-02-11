# FRAMEWORK DE AUTOMATIZACIÓN - SWAG LABS

## ¿QUÉ ES?

Framework BDD para pruebas End-to-End web y API usando Cypress y Cucumber.
Implementa Page Object Model con generación de reportes HTML.

## REQUISITOS

- Node.js 16+
- npm 8+
- Chrome instalado
- Visual Studio Code (opcional)

## INSTALACIÓN RÁPIDA

```bash
git clone https://github.com/matiasmurua1/swag-labs-challenge.git
cd swag-labs-challenge
npm install
```

## COMANDOS PRINCIPALES

```bash
npm run test              # Ejecutar pruebas en modo headless
npm run test:open        # Abrir interfaz interactiva de Cypress
npm run test:report      # Ejecutar pruebas y generar reporte HTML
```

## ESTRUCTURA DETALLADA DEL PROYECTO

```
swag-labs-challenge/
├── cypress/                              Directorio principal de Cypress
│   ├── features/                         Casos de prueba en formato Gherkin
│   │   ├── api/
│   │   │   └── mercadoLibre.feature    Pruebas de API MercadoLibre
│   │   └── front/                      Pruebas de interfaz de usuario
│   │       ├── login.feature           Casos de prueba de login
│   │       └── shoppingCart.feature    Casos de compra y carrito
│   ├── pages/                           Page Object Model - Encapsulación de elementos
│   │   ├── homePage.js                 Elementos y acciones de página principal
│   │   ├── loginPage.js                Elementos y acciones de login
│   │   ├── yourCartPage.js             Elementos y acciones del carrito
│   │   ├── yourInformationPage.js      Elementos y acciones de información personal
│   │   └── checkoutOverviewPage.js     Elementos y acciones de resumen de compra
│   ├── steps_definitions/               Definición de pasos Gherkin a código
│   │   ├── api/
│   │   │   └── mercadoLibre.js         Implementación de pasos API
│   │   └── front/
│   │       ├── common.js               Pasos comunes compartidos
│   │       └── shoppingCart.js         Pasos de compra y carrito
│   ├── services/                        Servicios para llamadas a APIs externas
│   │   └── mercadoLibreApi.js          Cliente HTTP para MercadoLibre API
│   ├── support/                         Configuración y utilidades globales
│   │   ├── commands.js                 Comandos personalizados de Cypress
│   │   └── e2e.js                      Configuración inicial para pruebas
│   ├── reports/                         Reportes generados automáticamente
│   │   └── json/
│   │       └── cucumber_report.json    Reporte en formato JSON
│   └── screenshots/                     Screenshots de fallos generados automáticamente
│       └── front/
│           └── login.feature/
├── jsonlogs/                            Logs del sistema
│   ├── log.json                         Log en formato JSON
│   └── messages.ndjson                 Log en formato NDJSON
├── node_modules/                        Dependencias instaladas (ignorar en Git)
├── .vscode/                             Configuración de Visual Studio Code
├── cypress.config.js                    Configuración principal de Cypress
├── package.json                         Dependencias y scripts del proyecto
├── package-lock.json                    Lock de dependencias (ignorar en Git)
├── .gitignore                           Archivo de exclusiones para Git
├── .cypress-cucumber-preprocessorrc.json Configuración del preprocessor
├── cucumber-report.html                 Reporte HTML principal generado
└── README.md                            Explicación proyecto
```

## CARACTERÍSTICAS

- Pruebas BDD con Cucumber Preprocessor
- Patrón Page Object Model
- Reportes HTML automáticos
- Pruebas API integradas
- Screenshots en fallos
- Validación de código con ESLint

## TECNOLOGÍAS

Cypress, Cucumber, Node.js, ESLint, Multiple Cucumber HTML Reporter

## MEJORES PRÁCTICAS ISTQB

- Estructura Given, When, Then (AAA)
- Escenarios independientes
- Nombres descriptivos y claros
- Pruebas de UI y API separadas

## GENERAR REPORTE

```bash
npm run test:report
```
El reporte HTML se genera en `cucumber-report.html`


UTOR: MURUA MARTINEZ MATIAS NAHUEL  
Email: murua.matias.96@gmail.com  
Versión: 1.0.0 - Febrero 2026
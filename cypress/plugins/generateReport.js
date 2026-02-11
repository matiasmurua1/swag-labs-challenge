const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  theme: 'bootstrap',
  jsonFile: 'cypress/reports/json/cucumber_report.json',
  output: 'cypress/reports/html/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': 'Production',
    'Browser': 'Chrome',
    'Platform': process.platform,
    'Executed': 'Local',
    'Execution Time': new Date().toISOString()
  }
});
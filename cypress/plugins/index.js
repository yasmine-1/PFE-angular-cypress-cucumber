
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
module.exports = (on) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: require.resolve("typescript"),
  };
    on('file:preprocessor', browserify())
    on("file:preprocessor", cucumber());
  };
  const xlsx = require('node-xlsx').default; 
  const fs = require('fs'); // for file
  module.exports = (on, config) => {
    on('task',{
    parseExcel: parseExcel,
    })
    on('file:preprocessor', cucumber ())} ; 
    function parseExcel(filePath){
      return new Promise((resolve, reject) => {
        try {
          const jsonData = xlsx.parse(fs.readFileSync(filePath));
          resolve(jsonData);
        } catch (e) {
           reject(e);
          }
      });     
    } 
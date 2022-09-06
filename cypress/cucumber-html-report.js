const report = require("multiple-cucumber-html-reporter");
report.generate({
jsonDir: "./cucumber-json",  // ** Path of .json file **//
reportPath: "./reports/cucumber-htmlreport.html",
metadata: {
browser: {
name: "chrome",
},
device: "Local test machine",
platform: {
name: "windows",
version: "10",
},
},
});
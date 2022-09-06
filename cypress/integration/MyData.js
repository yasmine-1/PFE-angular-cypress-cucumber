describe('Transform data from EXCEL file into JSON file', () => {
  it('Data for testing internationalization labels of login page and home page', () => {
    cy.task('parseExcel', 'cypress/fixtures/InternationalizationExcel.xlsx').then((jsonData) => {
      const rowLength = Cypress.$(jsonData[0].data).length
      const data = jsonData[0].data;
      const outputJson = [];
      for (let index = 1; index < data.length; index++) {
        console.log('test', JSON.stringify(data[index]));
        outputJson.push({ Information: data[index][0], English: data[index][1], Français: data[index][2], xPath: data[index][3], id: data[index][4], actions: data[index][5], EndActions: data[index][6], PageName: data[index][7] });
      }
      cy.writeFile("cypress/fixtures/InternationalizationData.json", outputJson)
      cy.wait(1000)
    })
  })


  it('Data for testing CSS styles of login page and home page', () => {
    cy.task('parseExcel', 'cypress/fixtures/StylesCSS.xlsx').then((jsonData) => {
      const rowLength = Cypress.$(jsonData[0].data).length
      const data = jsonData[0].data;
      const outputJson = [];
      for (let index = 1; index < data.length; index++) {
        console.log('test', JSON.stringify(data[index]));
        outputJson.push({ Information: data[index][0], Color: data[index][1], Width: data[index][2], Height: data[index][3], xPath: data[index][4], actions: data[index][5], EndActions: data[index][6], PageName: data[index][7] });
      }
      cy.writeFile("cypress/fixtures/DataStylesCSS.json", outputJson)
      cy.wait(1000)
    })
  })
})



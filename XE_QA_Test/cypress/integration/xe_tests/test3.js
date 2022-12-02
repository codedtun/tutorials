describe("Currency Converter Test", function () {
  it("Verify User is on the right URL", () => {
    cy.visit("https://www.xe.com/currencyconverter/");
    cy.wait(1000);
  });

  it("Checks for Transfered Money", () => {
    cy.wait(6000);
    cy.get("element-IND2S9").invoke("show");
  });
});

describe("Currency Converter Test", function () {
  it("Verify User is on the right URL", () => {
    cy.visit("https://www.xe.com/currencyconverter/");
    cy.wait(1000);
    cy.get(
      '[style="display: flex; justify-content: flex-end;"] > .haqezJ'
    ).click();
    cy.get("[class='heading__Heading1-n07sti-0 jYWnTk']").contains(
      "Xe Currency Converter"
    );
  });

  it("Checks for Transfered Money", () => {
    cy.wait(6000);
    cy.get("element-IND2S9").invoke("show");  
  });
});

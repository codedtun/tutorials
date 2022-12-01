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

  it("Transfers Money", () => {
    //cy.wait(6000);
    cy.get("element-IND2S9").invoke("show");

    // cy.window().then((win) => {
    //   cy.stub(win, "prompt").callsFake(() => null);
    //   // cy.on("window:confirm", () => false);
    //   // cy.get("#element-eQ0w7x").click();
    //   // cy.get(".amount-input__Wrapper-sc-1gq6pic-0").click();
    //   // cy.get(".amount-input__Wrapper-sc-1gq6pic-0").type("10");
    //   // cy.get("input#midmarketFromCurrency").click();
    //   // cy.get("input#midmarketFromCurrency").type("GBP");
    //   // cy.get("input#midmarketFromCurrency").type("{enter}");
    //   // cy.get(
    //   //   "[class='currency-converter__SubmitZone-zieln1-3 eIzYlj'] button"
    //   // ).click();
    //   // cy.get(".result__BigRate-sc-1bsijpp-1").should(
    //   //   "have.value",
    //   //   "11.540261 Euros"
    //   // );
    // });
  });
});

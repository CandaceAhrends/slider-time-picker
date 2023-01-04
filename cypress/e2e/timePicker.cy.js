describe("TimePicker", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("should enter a valid time", () => {
    cy.get(".time-input").should("be.visible");
    cy.get(".time-input").type("3:30").type("{enter}");
    cy.get(".error").should("have.text", "");
  });
  it("should show an error if invalid char entered", () => {
    cy.get(".time-input").should("be.visible");
    cy.get(".time-input").type("asfd").type("{enter}");
    cy.get(".error").should(
      "have.text",
      "Invaid Time Format: Please use hh:mm"
    );
  });
  it("should not allow invalid time number", () => {
    cy.get(".time-input").should("be.visible");
    cy.get(".time-input").type("99:99").type("{enter}");
    cy.get(".error").should(
      "have.text",
      "Invaid Time Format: Please use hh:mm"
    );
  });
  it("should not allow invalid time number", () => {
    cy.get(".time-input").should("be.visible");
    cy.get(".time-input").type("0").type("{enter}");
    cy.get(".error").should(
      "have.text",
      "Invaid Time Format: Please use hh:mm"
    );
  });
  it("should not allow invalid time number", () => {
    cy.get(".time-input").should("be.visible");
    cy.get(".time-input").type("0320").type("{enter}");
    cy.get(".error").should(
      "have.text",
      "Invaid Time Format: Please use hh:mm"
    );
  });
  it("should allow   backspace", () => {
    cy.get(".time-input").should("be.visible");
    cy.get(".time-input").type("99").type("{enter}");
    cy.get(".time-input").type("{backspace}");
    cy.get(".time-input").type("{backspace}");
  });
});

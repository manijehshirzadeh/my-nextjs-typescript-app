describe("Navigation", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/")
	})
	it("should navigate to the home page", () => {
		cy.get("h4").contains("Manijeh Shirzadeh")
	})
})

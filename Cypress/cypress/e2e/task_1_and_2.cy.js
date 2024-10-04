let productNames = ['MacBook', 'iPhone', 'Apple Cinema 30', "Canon EOS 5D"]
const email = "e2@g.com"
const password = "pass1" // "pass1"
let isvalid = true

describe('Product Name into Search', () => {
    it.only('👉Providing List of Product Name', () => {
        cy.visit("https://tutorialsninja.com/demo/index.php?route=account/login")
        cy.xpath('//input[@name="email"]').type(email)
        cy.xpath('//input[@name="password"]').type(password)
        cy.xpath('//input[@type="submit"]').click()
        cy.xpath('//a[contains(text(), "Qafox.com")]').click()
        for(let i = 0; i < productNames.length; i ++){
            cy.log("Searching For👉 " + productNames[i])
            cy.xpath('//input[@placeholder="Search"]').type(productNames[i])
            cy.log("Before Searching...")
            cy.wait(5000)
            cy.xpath('(//button[@type="button"])[4]').click()
            cy.wait(10000)
            cy.xpath('//a[contains(text(), "Qafox.com")]').click()
        }
    });
});
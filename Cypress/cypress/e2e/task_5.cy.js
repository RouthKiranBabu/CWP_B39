const email = "e2@g.com"
const password = "pass1"
const existingProductName = 'MacBook'

describe('👉Test As Per Assignment in Project!✅', () => {
    it('Tasks', () => {
        // For visiting URL
        cy.log("👉 Enter the URL :  https://tutorialsninja.com/demo/ ")
        cy.visit("https://tutorialsninja.com/demo/")

        // Takes the screenshot and then wait for 2 seconds.
        cy.screenshot("1_HomePage")
        cy.wait(2000)

        // Login in to the target user
        cy.log("👉 Login and register manually into the application first")
        cy.xpath('//a[@title="My Account"]').click()
        cy.xpath('//a[contains(text(), "Login")]').click()
        cy.xpath('//input[@name="email"]').type(email)
        cy.xpath('//input[@name="password"]').type(password)

        // Takes a screenshot of login page
        cy.screenshot("2_LoginPage")

        cy.xpath('//input[@type="submit"]').click()
        cy.xpath('//div[@id="logo"]').click()
        cy.url()
        .should("include", "home")

        // Waits for 2 seconds.
        cy.wait(2000)

        // Entering the productname into the search space and assertion
        cy.log("👉 1. Enter any existing Product name into the Search text box field .")
        cy.xpath('//input[@name="search"]').type(existingProductName)
        .should('have.value', existingProductName)

        // Takes screenshot and wait
        cy.screenshot("3_SearchProduct")
        cy.wait(2000)

        // Click on the search icon an then checking the url includes search=MacBook
        cy.log("👉 2. Click on the button having search icon")
        cy.xpath('//span[@class="input-group-btn"]').click()
        cy.url()
        .should("include", "Search=MacBook")/////////.should("include", "Search=MacBook")

        // Takes screenshot and wait
        cy.screenshot("4_SearchMacBook")
        cy.wait(2000)

        // Clicks on add to Cart
        cy.log("👉 3. Click on 'Add to Cart' button on the Product displayed in the Search results")
        cy.xpath('(//div[@class="button-group"]/button[1])[1]')
        .should('have.attr', 'type', 'button').click()

        // Takes screenshot and wait for 2 seconds.
        cy.screenshot("5_AddToCart")
        cy.wait(2000)

        // Click on the shopping cart displayed in the alert message
        cy.log("👉 4. Click on the 'shopping cart!' link in the displayed success message")
        // Taking screenshot
        cy.xpath('//div[@class="alert alert-success alert-dismissible"]/a[2]').screenshot('6_Alert')
        cy.xpath('//div[@class="alert alert-success alert-dismissible"]/a[2]')
        .should('have.attr', "href", "https://tutorialsninja.com/demo/index.php?route=checkout/cart").click()
        
        // Wait for 2 seconds
        cy.wait(2000)

        // Clicking on checkout
        cy.log("👉 5. Click on 'Checkout' button in the 'Shopping Cart' page")
        // Taking screenshot and then click
        cy.xpath('//div[@class="pull-right"]').screenshot('7_Checkout')
        cy.xpath('//div[@class="pull-right"]')
        .should('have.text', 'Checkout').click()

        // Wait for 2 seconds.
        cy.wait(2000)

        // Clicks on continue button
        cy.log("👉 6. Click on 'Continue' button  ")
        // Takes Screenshot and then clicks
        cy.xpath('(//div[@class="pull-left"])[2]').screenshot('8_Continue')
        cy.xpath('(//div[@class="pull-left"])[2]')
        .should('have.text', 'Continue Shopping').click()

        // Wait for 2 seconds
        cy.wait(2000)
        
        // Makes screenshot of terms and conditions and clicks on it
        cy.log("👉 9. Select the 'Terms & Conditions' checkbox field")
        cy.xpath('//*[contains(text(), "Terms & Conditions")]').screenshot('09_TermsAndConditions')
        cy.xpath('//*[contains(text(), "Terms & Conditions")]')
        .should('have.text', 'Terms & Conditions').click()
        // Going Bach to home
        cy.xpath('//div[@id="logo"]').click()
        cy.url()
        .should('include', 'ndex.php?route=common/home')

        // Wait for 2 seconds
        cy.wait(2000)

        // Takes screenshot and then click on my account dropdown menu
        cy.log("👉 13. Click on 'My Account' dropmenu")
        cy.xpath('(//li[@class="dropdown"])[1]').screenshot('10_MyAccount')
        cy.xpath('(//li[@class="dropdown"])[1]')
        .should('have.attr', 'class', 'dropdown').click()

        // Wait for 2 seconds
        cy.wait(2000)
        
        // Taking screenshot and then clicking on the My Account Option
        cy.log("👉 14. Select 'My Account' option ")
        cy.xpath('//ul[@class="dropdown-menu dropdown-menu-right"]/li[1]').screenshot('11_SelectMyAccount')
        cy.xpath('//ul[@class="dropdown-menu dropdown-menu-right"]/li[1]')
        .should('have.text', 'My Account').click()
        // Wait for 2 seconds
        cy.wait(2000)

        // Taking screenshot and then clicking on the View Cart
        cy.log("👉 15. Go to Add to Cart Page.")
        cy.xpath('//div[@id="cart"]').screenshot('12_Cart')
        cy.xpath('//div[@id="cart"]')
        .should('have.attr', 'id', 'cart').click()
        cy.xpath('//strong[contains(text(),"View Cart")]')
        .should('have.text', 'View Cart').click()
        // Wait for 2 seconds
        cy.wait(2000)

        // Taking screenshot and then Clicking on the brands option present on the footer
        cy.log("👉 16. Click on 'Brands' Footer link")
        cy.xpath('//a[contains(text(), "Brands")]').screenshot('13_Brands')
        cy.xpath('//a[contains(text(), "Brands")]')
        .should('have.attr', 'href', 'https://tutorialsninja.com/demo/index.php?route=product/manufacturer').click()
        // Wait for 2 seconds
        cy.wait(2000)

        // Taking screenshot and then click on any of the brand name
        cy.log("👉 17. Click on any Brand Name in the displayed page")
        cy.xpath('(//div[@class="col-sm-3"]/a)[1]').screenshot('14_BrandName')
        cy.xpath('(//div[@class="col-sm-3"]/a)[1]')
        .should('have.attr', 'href', 'https://tutorialsninja.com/demo/index.php?route=product/manufacturer/info&manufacturer_id=8').click()
        // Wait for 2 seconds
        cy.wait(2000)

        // After taking the screenshot Clicking on the Add to Cart option in any of the product available in the give page
        cy.log("👉 18. Select 'ADD TO CART' option of any product that is displayed in the displayed Brand page")
        cy.xpath('(//div[@class="button-group"])[1]/button[1]').screenshot('15_AddToCart')
        cy.xpath('(//div[@class="button-group"])[1]/button[1]')
        .should('have.attr', 'type', 'button').click()
    });
});

// In cypress.config.js
// const { defineConfig } = require("cypress");
// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//     video: true
//   },
// });

// relative path👉 Cypress\cypress\e2e\task_5.cy.js
// 👇Command to get screenShot and Video When Something is Wrong
// npx cypress run --spec ./cypress/e2e/task_5.cy.js
let productName = "iPhone"
let price = "96.66€"

describe('Product Name into Search', () => {
    it.only('👉Providing List of Product Name', () => {
        cy.visit("https://tutorialsninja.com/demo/index.php?route=common/home")
        cy.xpath('(//button[@data-toggle="dropdown"])[1]').click()
        cy.xpath('//ul[@class="dropdown-menu"]').find('li').each(($ele) => {
            $ele.find('button').click()
            cy.log("New Currency👉 " + $ele.text())

            cy.wait(3000)
            cy.xpath('(//div[@class="row"])[3]').find('.caption').each(($ele) => {
                cy.log($ele.find('.price').text())
                if ($ele.find('.caption').text().includes(price)){
                    cy.log($ele.find('.caption').text())
                    let productName = $ele.find('h4').text()
                    cy.log(productName)
                }
            })
            cy.xpath('(//button[@data-toggle="dropdown"])[1]').click()
        })
    });
});
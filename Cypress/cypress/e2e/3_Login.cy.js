const email = ["e1@g.com"]
const password = ["pass1"]
let isvalid = true

function provideData(email, pwd){
    cy.log("Email: " + email + " Password: " + pwd)
    cy.xpath('//input[@name="email"]').type(email)
    cy.xpath('//input[@name="password"]').type(pwd)
    cy.xpath('//input[@type="submit"]').click()
    cy.xpath('//a[@title="My Account"]').click()
    if (cy.get('.alert').should('be.visible')){
        cy.log("Wait for 1 Hour!")
        isvalid = false
    }
    if (isvalid){
        try{
            cy.xpath('//a[contains(text(), "Logout")]').should("be.visible")
        }catch(error){
            cy.log(error.message)
            isvalid = false
        }
    }
    if(isvalid){
        cy.log("You have Successfully Logged in!")
    }else{
        cy.log("Not Logged in!")
    }
    // if (subs == true){
    //     cy.xpath('(//input[@type="radio"][@name="newsletter"])[1]').click()
    // }else{
    //     cy.xpath('(//input[@type="radio"][@name="newsletter"])[2]').click()
    // }
    // cy.xpath('//input[@name="agree"]').click()
    // cy.xpath('//input[@type="submit"]').click()
    // if(cy.get('.alert').should('be.visible')){
    //     cy.log('Account already Exist!')
    // }else{cy.log("Account For " + fname + " has been created!")}
}

function regProcess(){
    cy.visit("https://tutorialsninja.com/demo/")
    cy.xpath('//a[@title="My Account"]').click()
    cy.xpath('//a[contains(text(), "Login")]').click()
    for (let k = 0; k < email.length; k ++){
        for (let m = 0; m < password.length; m ++){
            provideData(email[k], password[m])
            return false;
        }
    }
}

function checkArray(){
    try{
        if (!Array.isArray(email)){throw new Error("Email Variable is not Array Type.");}
        if (!Array.isArray(password)){throw new Error("Password Variable is not Array Type.");}
    }catch(error){
        cy.log(error.message);
        isvalid = false
    }
}

describe('Login Process', () => {
    it('Checking All Variable is List type!', () => {
        checkArray();
        cy.log("Condition for Login Process: " + isvalid + ".")
    });
    it('Entering into register Process!', () => {
        if (isvalid){
            regProcess()
        }else{cy.log("Variable(s) is Not a List Type!")}
    });
});

const email = ["e2@g.com"]
const password = ["pas1"] // "pass1"
let isvalid = true

function provideData(email, pwd){
    cy.log("Email: " + email + " Password: " + pwd)
    cy.xpath('//input[@name="email"]').type(email)
    cy.xpath('//input[@name="password"]').type(pwd)
    cy.xpath('//input[@type="submit"]').click()
    cy.xpath('//a[@title="My Account"]').click()
    
    if (cy.get('.alert').should('be.visible').and('have.text', "Warning: No match for E-Mail Address and/or Password.")){
        cy.log("Email or password is incorrect!")
        isvalid = false
    }
    if(!isvalid){
        cy.log("Not Logged in!")
    }
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

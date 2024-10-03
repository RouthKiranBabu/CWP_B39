const firstname = ["f1", "f2"]
const lastname = ["l1", "l2"]
const email = ["e1@g.com", "e2@g.com"]
const telephone = [123, 456]
const password = ["pass1"]
const subscribe = [true, false]
let isvalid = true

function checkArray(){
    try{
        if (!Array.isArray(firstname)){throw new Error("Firstname Variable is not Array Type.");}
        if (!Array.isArray(lastname)){throw new Error("Lastname Variable is not Array Type.");}
        if (!Array.isArray(email)){throw new Error("Email Variable is not Array Type.");}
        if (!Array.isArray(telephone)){throw new Error("Telephone Variable is not Array Type.");}
        if (!Array.isArray(password)){throw new Error("Password Variable is not Array Type.");}
    }catch(error){
        cy.log(error.message);
        isvalid = false
    }
}

function provideData(fname, lname, email, tele, pwd, subs){
    cy.log("FirstName: " + fname + " LastName: " + lname + " Email: " + email + " Telephone: " + tele + " Password: " + pwd + " Subscribe: " + subs)
    cy.xpath('//input[@name="firstname"]').type(fname)
    cy.xpath('//input[@name="lastname"]').type(lname)
    cy.xpath('//input[@name="email"]').type(email)
    cy.xpath('//input[@name="telephone"]').type(tele)
    cy.xpath('//input[@name="password"]').type(pwd)
    cy.xpath('(//input[@type="password"])[2]').type(pwd)
    if (subs == true){
        cy.xpath('(//input[@type="radio"][@name="newsletter"])[1]').click()
    }else{
        cy.xpath('(//input[@type="radio"][@name="newsletter"])[2]').click()
    }
    cy.xpath('//input[@name="agree"]').click()
    cy.xpath('//input[@type="submit"]').click()
    if(cy.get('.alert').should('be.visible')){
        cy.log('Account already Exist!')
    }else{cy.log("Account For " + fname + " has been created!")}
}

function regProcess(){
    cy.visit("https://tutorialsninja.com/demo/")
    cy.xpath('//a[@title="My Account"]').click()
    cy.xpath('//a[contains(text(), "Register")]').click()
    for(let i = 0; i < firstname.length; i ++){
        for (let j = 0; j < lastname.length; j ++){
            for (let k = 0; k < email.length; k ++){
                for (let l = 0; l < telephone.length; l ++){
                    for (let m = 0; m < password.length; m ++){
                        for(let n = 0; n < subscribe.length; n ++){
                            provideData(firstname[i], lastname[j], email[k], telephone[l], password[m], subscribe[n])
                            return false;
                        }
                    }
                }
            }
        }
    }
}

describe('Register Process', () => {
    it('Checking All Variable is List type!', () => {
        checkArray();
        cy.log("Condition for Register Process: " + isvalid + ".")
    });
    it('Entering into register Process!', () => {
        if (isvalid){
            regProcess()
        }else{cy.log("Variable(s) is Not a List Type!")}
    });
});

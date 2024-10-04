# 👉Output View
<img alt="Awesome GitHub Profile Readme" src="./day_3.gif"> </img>

# 👉Code Section
  ## Aim
  - Start doing Cypress Project as much as Possible
  - Read Carefully the given documentation and do the Work
  ## Things Required
  - [Cypress](https://www.cypress.io/)
  - [VS Code](https://code.visualstudio.com/)
  ## Procedure
  1. Next Day is the dead line need to complete as much as possible as per documentation.
  2. Set High and Low Priority Work.
  3. Do the High Priority Work first and then low priority.
  ## Theory
  - Cypress Commands Used
      - [x] `cy.visit()`: Navigates to a URL.
      - [x] `cy.xpath()`: Finds elements on the page).
      - [x] `cy.contains()`: Finds an element containing specific text.
      - [x] `cy.click()`: Simulates a click on an element.
      - [ ] `cy.type()`: Types text into an input field.
      - [ ] `cy.url()`: Asserts the current URL.
      - [x] `cy.should()`: Adds an assertion to verify that something should happen (e.g., an element is visible, contains text, etc.).

```mermaid
graph TD;
    Register-->For_First_Time;
    Register-->Register_Again;
    Login_Pass-->Register_Again;
    Register_Again-->Causes_Alert;
```
```mermaid
graph TD;
    Login-->First_Time;
    Login-->Many_Time;
    Login-->With_Wrong_Input;
    Many_Time-->Couse_Alert;
    With_Wrong_Input-->Cause_Alert;
```

# 👉 Output View
<img alt="Awesome GitHub Profile Readme" src="./_Day1.gif"> </img>

# Java
  - [Java Project](https://github.com/RouthKiranBabu/CWP_B39/tree/day_1/Java)
      - [Access Modifier 👉 `Packages & Codes`](https://github.com/RouthKiranBabu/CWP_B39/tree/day_1/Java/Access_Modifiers/src)
      - [Check Anagrams 👉 `Packages & Codes`](https://github.com/RouthKiranBabu/CWP_B39/tree/day_1/Java/Check_Anagrams/checkAnagrams/src)
  - My Approach
      - Used `chatGPT` 👉 For Additional Code Learning
      - For good **presentation** 👉 Styling Github [*readme*](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#headings)

# Pre-requisites
  - [Git](https://git-scm.com/) 👉 [Tutorials](https://www.youtube.com/watch?v=HVsySz-h9r4&list=PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx)
  - [Sprint Tools 4](https://spring.io/tools)

# Theory To Know
## What is Access Modifier?
In Java, access modifiers are keywords used to set the accessibility (or visibility) of classes, methods, and other members. They control how the members of a class can be accessed from other classes. Java has four access modifiers:
  - `public`: The member is accessible from any other class.
  - `protected`: The member is accessible within the same package and subclasses (even in other packages).
  - `default (no modifier)`: The member is accessible only within the same package.
  - `private`: The member is accessible only within the same class.


| Modifier | Class | Package | Subclass (Same Package) | Subclass (Different Package) | World |
| :--- | :---: | :---: | :---: | :---: | ---: |
| private |	Yes |	No |	No |	No |	No |
| default |	Yes |	Yes |	Yes |	No |	No |
| protected |	Yes |	Yes |	Yes |	Yes |	No |
| public |	Yes |	Yes |	Yes |	Yes |	Yes |


# Practical Approach
  ## Code
  ```java
  // Example.java
package mypackage;

class Example {
    // Public method: can be accessed from anywhere
    public void publicMethod() {
        System.out.println("Public method");
    }

    // Private method: can only be accessed within this class
    private void privateMethod() {
        System.out.println("Private method");
    }

    // Protected method: can be accessed within the package or subclasses
    protected void protectedMethod() {
        System.out.println("Protected method");
    }

    // Default method: can be accessed only within the package
    void defaultMethod() {
        System.out.println("Default method");
    }

    // Method to demonstrate access within the same class
    public void showAccess() {
        publicMethod();     // Accessible
        privateMethod();    // Accessible
        protectedMethod();  // Accessible
        defaultMethod();    // Accessible
    }
}

public class TestAccessModifiers {
    public static void main(String[] args) {
        Example ex = new Example();

        // Access methods
        ex.publicMethod();      // Accessible
        // ex.privateMethod();   // Not accessible, gives a compile-time error
        ex.protectedMethod();   // Accessible (same package)
        ex.defaultMethod();     // Accessible (same package)
    }
}
  ```
## Output
```java
Public method
Protected method
Default method
```

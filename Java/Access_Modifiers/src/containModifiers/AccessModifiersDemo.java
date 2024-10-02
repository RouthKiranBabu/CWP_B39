package containModifiers;

public class AccessModifiersDemo {
    public String publicVar = "Public Variable";
    private String privateVar = "Private Variable";
    protected String protectedVar = "Protected Variable";
    String defaultVar = "Default Variable"; // package-private (default)

    // Public method
    // Void is not going to return any data type value
    public void publicMethod() {
        System.out.println("Public Method: Accessing public method from another class.");
    }

    // Private method
    private void privateMethod() {
        System.out.println("Private Method: Cannot access private method from another class.");
    }

    // Protected method
    protected void protectedMethod() {
        System.out.println("Protected Method: Accessing protected method from subclass.");
    }

    // Default (package-private) method
    void defaultMethod() {
        System.out.println("Default Method: Accessing default method from the same package.");
    }

    // Access private method from within the class
    public void accessPrivateMethod() {
        privateMethod();
    }
}

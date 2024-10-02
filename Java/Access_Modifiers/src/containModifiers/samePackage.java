package containModifiers;

public class samePackage {

	public static void main(String[] args) {
        AccessModifiersDemo demo = new AccessModifiersDemo();
        
        // Accessing public member
        System.out.println(demo.publicVar);
        demo.publicMethod();

        // Accessing protected member
        System.out.println(demo.protectedVar);
        demo.protectedMethod();

        // Accessing default member
        System.out.println(demo.defaultVar);
        demo.defaultMethod();

        // Accessing private member (This will fail)
        // System.out.println(demo.privateVar); // Compile-time error
        // demo.privateMethod(); // Compile-time error

        // Access private method indirectly
        demo.accessPrivateMethod();
    }

}

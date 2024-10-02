package differentPackage;
import containModifiers.AccessModifiersDemo;

public class differentPackage extends AccessModifiersDemo {

	public static void main(String[] args) {
		differentPackage demo = new differentPackage();
        
        // Accessing public member
        //System.out.println(demo.publicVar);
        demo.publicMethod();

        // Accessing protected member from a subclass
        //System.out.println(demo.protectedVar);
        demo.protectedMethod();

        // Cannot access default or private members from a different package
        // System.out.println(demo.defaultVar); // Compile-time error
        // demo.defaultMethod(); // Compile-time error
        //demo.privateMethod(); // Compile-time error
    }

}
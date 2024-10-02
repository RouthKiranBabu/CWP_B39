package checkAnagrams;
import java.util.Scanner;
import java.util.Arrays;

public class checkAnagrams {

	public static boolean areAnagrams(String str1, String str2) {
        // Remove spaces and convert to lowercase
        str1 = str1.replaceAll("\\s", "").toLowerCase();
        str2 = str2.replaceAll("\\s", "").toLowerCase();

        // Convert strings to char arrays
        char[] charArray1 = str1.toCharArray();
        char[] charArray2 = str2.toCharArray();

        // Sort the char arrays
        Arrays.sort(charArray1);
        Arrays.sort(charArray2);

        // Check if sorted char arrays are equal
        return Arrays.equals(charArray1, charArray2);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first string: ");
        String firstString = scanner.nextLine();

        System.out.print("Enter the second string: ");
        String secondString = scanner.nextLine();

        if (areAnagrams(firstString, secondString)) {
            System.out.println("The strings \"" + firstString + "\" and \"" + secondString + "\" are anagrams.");
        } else {
            System.out.println("The strings \"" + firstString + "\" and \"" + secondString + "\" are not anagrams.");
        }

        scanner.close();
    }
}

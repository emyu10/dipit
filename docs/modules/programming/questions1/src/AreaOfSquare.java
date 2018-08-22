import java.io.IOException;

public class AreaOfSquare {
    public static void main(String args[]) {
        Integer side;
        System.out.println("Enter side: ");
        try {
            side = System.in.read();
            System.out.println("The area is " + (side * side));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

import java.util.Scanner;

public class CountdownTimer {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter time in seconds: ");
        int seconds = scanner.nextInt();
        scanner.close();

        while (seconds >= 0) {
            int mins = seconds / 60;
            int secs = seconds % 60;
            System.out.print("\rTime remaining: " + String.format("%02d:%02d", mins, secs));
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            seconds--;
        }

        System.out.println("\nTime's up!");
    }
}

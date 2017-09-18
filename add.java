import java.util.Scanner;

public class addition
{
    public static void main(String args[])
    {
        int num1, num2, sum;
        Scanner scan = new Scanner(System.in);
		
        System.out.print("Enter Two Numbers : ");
        num1 = scan.nextInt();
        num2 = scan.nextInt();
		
        sum = num1 + num2;
		
        System.out.print("Sum of the Entered Two Number is " +sum);
    }
}
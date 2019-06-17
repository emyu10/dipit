#include <stdio.h>
/*
    SAMPLE OUTPUT
    -------------

    Enter the first number
    10
    Enter the second number
    20

    The options are ...
    1. Add
    2. Subtract
    3. Multiply
    4. Divide

    Enter your option: 1

    The sum of 10 and 20 is 30
*/
void main()
{
    int num1, num2, option;
    float ans;

    printf("Enter the first number\n");
    scanf("%d", &num1);

    printf("Enter the second number\n");
    scanf("%d", &num2);

    printf("\n+------------------------------------+\n");
    printf("| The options are ...                |\n");
    printf("| -------------------                |\n");
    printf("|\t1. Add                       |\n");
    printf("|\t2. Subtract                  |\n");
    printf("|\t3. Multiply                  |\n");
    printf("|\t4. Divide                    |\n");
    printf("+------------------------------------+\n\n");

    printf("Enter your option: ");
    scanf("%d", &option);
    printf("\n");

    if (option == 1) {
        ans = num1 + num2;
        printf("The result of addition is: %.0f", ans);
    } else if (option == 2) {
        ans = num1 - num2;
        printf("The result of subtraction is: %.0f", ans);
    } else if (option == 3) {
        ans = num1 * num2;
        printf("The result of multiplication is: %.0f", ans);
    } else if (option == 4) {
        ans = (float) num1 / (float) num2;
        printf("The result of addition is: %.2f", ans);
    } else {
        printf("Please choose from the available options.");
    }
    printf("\n");
}

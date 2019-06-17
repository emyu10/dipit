#include <stdio.h>
void main()
{
    int number1, number2;

    printf("Enter two numbers: ");
    scanf("%d,%d", &number1, &number2);

    if (number1 == number2) {
        printf("Result: %d = %d", number1, number2);
    } else if (number1 > number2) {
        printf("Result: %d > %d", number1, number2);
    } else {
        printf("Result: %d < %d", number1, number2);
    }
}

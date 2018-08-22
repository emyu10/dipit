#include <stdio.h>
void main()
{
    int num1, num2, result;
    printf("Please enter number one: \n");
    scanf("%d", &num1);

    printf("Please enter number two: \n");
    scanf("%d", &num2);

    result = num1 + num2;

    printf("The sum of the two numbers is %d", result);
}

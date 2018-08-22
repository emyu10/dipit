#include <stdio.h>
void main()
{
    int num1, num2, num3, result;
    printf("Please enter number one: \n");
    scanf("%d", &num1);

    printf("Please enter number two: \n");
    scanf("%d", &num2);

    printf("Please enter number three: \n");
    scanf("%d", &num3);

    result = num1 + num2 + num3;

    printf("The sum of the two numbers is %d", result);
}

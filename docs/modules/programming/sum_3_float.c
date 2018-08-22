#include <stdio.h>
void main()
{
    float num1, num2, num3, result;
    printf("Please enter number one: \n");
    scanf("%f", &num1);

    printf("Please enter number two: \n");
    scanf("%f", &num2);

    printf("Please enter number three: \n");
    scanf("%f", &num3);

    result = num1 + num2 + num3;

    printf("The sum of the two numbers is %f", result);
}

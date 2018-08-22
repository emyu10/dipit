#include <stdio.h>
void main()
{
    int num1, num2, larger;
    printf("Please enter number one:");
    scanf("%d", &num1);

    printf("Please enter number two:");
    scanf("%d", &num2);

    larger = (num1 > num2) ? num1 : num2;

    printf("The larger number is %d", larger);
}

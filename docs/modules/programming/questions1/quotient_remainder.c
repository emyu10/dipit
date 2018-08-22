#include <stdio.h>
void main()
{
    int a, b;
    printf("Input A:");
    scanf("%d", &a);

    printf("Input B:");
    scanf("%d", &b);

    printf("Quotient is %d\n", a / b);
    printf("Remainder is %d", a % b);
}

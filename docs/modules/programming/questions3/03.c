#include <stdio.h>
/*
    Print the largest among two numbers
*/
void main()
{
    int a, b;

    printf("Input A:");
    scanf("%d", &a);

    printf("Input B:");
    scanf("%d", &b);

    if (a > b) {
        printf("The largest is A, the value is %d\n", a);
    } else {
        printf("The largest is B, the value is %d\n", b);
    }
}

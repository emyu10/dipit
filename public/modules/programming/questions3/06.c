#include <stdio.h>
/*
    Find largest among 3 numbers
*/
void main()
{
    int a, b, c, l;
    printf("Input A: ");
    scanf("%d", &a);

    printf("Input B: ");
    scanf("%d", &b);

    printf("Input C: ");
    scanf("%d", &c);

    l = a;

    if (b > l) {
        l = b;
    }
    if (c > l) {
        l = c;
    }

    printf("The largest number is %d", l);
}

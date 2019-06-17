#include <stdio.h>
/*
    Find largest among 4 numbers
*/
void main()
{
    int a, b, c, d, l;
    printf("Input A: ");
    scanf("%d", &a);

    printf("Input B: ");
    scanf("%d", &b);

    printf("Input C: ");
    scanf("%d", &c);

    printf("Input D: ");
    scanf("%d", &d);

    l = a;

    if (b > l) {
        l = b;
    }
    if (c > l) {
        l = c;
    }
    if (d > l) {
        l = d;
    }

    printf("The largest number is %d", l);
}

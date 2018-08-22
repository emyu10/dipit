#include <stdio.h>
void main()
{
    int a, b, c;
    float x;

    printf("Enter a: ");
    scanf("%d", &a);
    printf("Enter b: ");
    scanf("%d", &b);
    printf("Enter c: ");
    scanf("%d", &c);

    x = (float) (a + b) / c;

    printf("The value of \"x\" is %.2f", x);
}

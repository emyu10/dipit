#include <stdio.h>
void main()
{
    int b, c;
    float x;
    printf("Please enter b: ");
    scanf("%d", &b);

    printf("Please enter c: ");
    scanf("%d", &c);

    x = 3.14 + (b * c);

    printf("Value of x = %.2f\n", x);
}

#include <stdio.h>
void main()
{
    float l, b, a;
    printf("Please enter length:\n");
    scanf("%f", &l);

    printf("Please enter breadth:\n");
    scanf("%f", &b);

    a = l * b;

    printf("The area of the rectangle is %f", a);
}

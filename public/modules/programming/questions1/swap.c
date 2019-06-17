#include <stdio.h>
void main()
{
    int a, b, s;
    printf("Input A:");
    scanf("%d", &a);

    printf("Input B:");
    scanf("%d", &b);

    s = a;
    a = b;
    b = s;

    printf("A is %d\n", a);
    printf("B is %d", b);
}

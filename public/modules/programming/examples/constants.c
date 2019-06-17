#include <stdio.h>
void main()
{
    const int a = 1234;
    const float b = 25.67;
    const char c = 'X';
    const char d[30] = "welcome to C programming";

    printf("Value of a = %d\n", a);
    printf("Value of b = %.2f\n", b);
    printf("Value of c = %c\n", c);
    printf("Value of d = %s\n", d);
}

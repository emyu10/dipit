#include <stdio.h>
/* input two numbers; if two numbers are equal print "OK" */
void main()
{
    int a, b;
    printf("Input A:");
    scanf("%d", &a);

    printf("Input B:"),
    scanf("%d", &b);

    if (a == b) {
        printf("OK");
    }
}

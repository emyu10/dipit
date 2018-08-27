#include <stdio.h>
/*
    Input two numbers
    If two numbers are equal, print "OK"
    Otherwise, print "NOT OK"
*/
void main()
{
    int a, b;

    printf("Input A:");
    scanf("%d", &a);

    printf("Input B:");
    scanf("%d", &b);

    if (a == b) {
        printf("OK");
    } else {
        printf("NOT OK");
    }
}

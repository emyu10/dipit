#include <stdio.h>
/*
    Print the given number is odd or even
*/
void main()
{
    int num;

    printf("Input number:");
    scanf("%d", &num);

    if (num % 2 == 0) {
        printf("EVEN");
    } else {
        printf("ODD");
    }
}

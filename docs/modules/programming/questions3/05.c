#include <stdio.h>
/*
    Print the given year is leap or not
*/
void main()
{
    int num;

    printf("Input number:");
    scanf("%d", &num);

    if (num % 4 == 0) {
        printf("LEAP");
    } else {
        printf("NOT LEAP");
    }
}


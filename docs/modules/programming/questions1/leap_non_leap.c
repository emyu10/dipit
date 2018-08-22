#include <stdio.h>
void main()
{
    int year;
    printf("Please enter year: ");
    scanf("%d", &year);
    (year % 4 == 0) ? printf("LEAP") : printf("NON LEAP");
}

#include <stdio.h>
void main()
{
    char february;
    int days;
    printf("If this year is leap year, enter 1. If not, enter any integer: ");
    scanf("%c", &february);
    days = (february == '1') ? 29 : 28;
    printf("Number of days in February = %d\n", days);
}

#include <stdio.h>
void main()
{
    int num;
    printf("Please enter number: ");
    scanf("%d", &num);
    (num % 2 == 0) ? printf("EVEN") : printf("ODD");
}

#include <stdio.h>
void main()
{
    int num;
    printf("Please enter number: ");
    scanf("%d", &num);
    (num == 0) ? printf("ZERO") : (num > 0) ? printf("POSTIVIE") : printf("NEGATIVE");
}

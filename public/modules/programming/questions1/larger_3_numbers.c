#include <stdio.h>
void main()
{
    int a, b, c, larger;
    printf("Please enter number one:");
    scanf("%d", &a);

    printf("Please enter number two:");
    scanf("%d", &b);

    printf("Please enter number three:");
    scanf("%d", &c);

    larger = (a > b) ? a : b;
    larger = (larger > c) ? larger : c;

    printf("The larger number is %d", larger);
}

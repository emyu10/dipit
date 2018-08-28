#include <stdio.h>
/*
    check if the entered character is an alphabet or not
*/
void main()
{
    char c;
    printf("Input character: ");
    scanf("%c", &c);

    if (c >= 'A' && c <= 'z') {
        printf("Entered character is an alphabet.");
    } else {
        printf("Entered character is NOT an alphabet.");
    }
}

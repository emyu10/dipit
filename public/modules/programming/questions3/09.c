#include <stdio.h>
/*
    check if the entered alphabet is a vowel or a consonent
*/
void main()
{
    char c;
    printf("Input character: ");
    scanf("%c", &c);

    if (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' || c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
        printf("%c is a VOWEL.", c);
    } else {
        printf("%c is a CONSONENT.", c);
    }
}

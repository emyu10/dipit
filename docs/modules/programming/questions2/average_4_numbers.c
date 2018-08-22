#include <stdio.h>
void main()
{
    int num;
    float total = 0.0;
    float average;

    printf("Please enter number one: ");
    scanf("%d", &num);
    total += num;
    //printf("%d\n", total);

    printf("Please enter number two: ");
    scanf("%d", &num);
    total += num;
    //printf("%d\n", total);

    printf("Please enter number three: ");
    scanf("%d", &num);
    total += num;
    //printf("%d\n", total);

    printf("Please enter number four: ");
    scanf("%d", &num);
    total += num;
    //printf("%d\n", total);

    average = total/4;

    printf("The average is\t%.2f",average);
}

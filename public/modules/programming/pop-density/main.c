#include <stdio.h>
#include <stdlib.h>

void main()
{
    int pop = 0;
    int landA = 0;
    float density = 0.0;
    float large = 0.0;
    float small = 0.0;
    float average = 0.0;
    int popTotal = 0;

    printf("\nPlease enter population:");
    scanf("%d", &pop);
    printf("Please enter land area:");
    scanf("%d", &landA);
    density = pop / landA;
    printf("Population density is %f", density);

    if (density > large) {
        large = density;
    }

    small = density;

    for (int c = 1; c <= 9; c++) {
        printf("\n\nPlease enter population:");
        scanf("%d", &pop);
        printf("Please enter land area:");
        scanf("%d", &landA);
        density = pop / landA;
        printf("Population density is %f", density);

        if (density > large) {
            large = density;
        }

        if (density < small) {
            small = density;
        }

        popTotal += pop;
    }

    average = popTotal / 10;

    printf("Largest population density is %f\n", large);
    printf("Smallest population density is %f\n", small);
    printf("Average population is %f", average);
}

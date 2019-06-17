#include <stdio.h>
/*
    -Input an option (either 1 or 2)
    -If the options is 1, input the radius of a circle and display the area of the circle
        Area = PI * r * r
    -If the option is 2, input the length and breadth of a rectangle, display the area of the rectangle
        Area = l * b
*/
void main()
{
    int option;
    float r, l, b, a;
    const float PI = 3.142;

    printf("Enter option: ");
    scanf("%d", &option);

    if (option == 1) {
        printf("Enter radius of a circle: ");
        scanf("%f", &r);
        a = PI * r * r;
        printf("Area of the circle is %.2f", a);
    } else if (option == 2) {
        printf("Enter length of a rectangle: ");
        scanf("%f", &l);
        printf("Enter breadth of a rectangle: ");
        scanf("%f", &b);

        a = l * b;
        printf("The area of the rectangle is %.2f", a);
    } else {
        printf("Invalid Option");
    }
}

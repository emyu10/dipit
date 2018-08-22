#include <stdio.h>
void main()
{
    float const PI = 3.142;
    float radius, area;

    printf("Please enter the radius:\n");
    scanf("%f", &radius);

    area = PI * radius * radius;

    printf("The area of the circle is %f", area);
}

#include <stdio.h>
void main()
{
    int r;
    float v;
    const float PI = 3.142;

    printf("Enter the radius: ");
    scanf("%d", &r);

    v = (4 / 3) * PI * r * r * r;

    printf("The volume of sphere is %.2f", v);
}

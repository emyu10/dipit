#include <stdio.h>
void main()
{
    int r, h;
    float v;
    const float PI = 3.142;

    printf("Please enter radius: ");
    scanf("%d", &r);

    printf("Please enter height: ");
    scanf("%d", &h);

    v = (1.0 / 3.0) * PI * r * r * h;

    printf("Volume of cone is %.2f", v);
}

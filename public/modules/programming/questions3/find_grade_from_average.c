#include <stdio.h>
/*
    - Input marks of 5 subjects
    - Find the total and average
    - Display only the grades based on the following table

    +-------+-----------+----------+-----------+-----------+-----------+
    | Avg   | 91 to 100 | 81 to 90 | 71 to 80  | 51 to 70  | 0 to 50   |
    +-------+-----------+----------+-----------+-----------+-----------+
    | Grade |    HD     |     DI   |    CR     |    PA     |   FAIL    |
    +-------+-----------+----------+-----------+-----------+-----------+
*/
void main()
{
    float marks, total = 0.0, avg;

    printf("Enter marks of subject 1: ");
    scanf("%f", &marks);
    total += marks;

    printf("Enter marks of subject 2: ");
    scanf("%f", &marks);
    total += marks;

    printf("Enter marks of subject 3: ");
    scanf("%f", &marks);
    total += marks;

    printf("Enter marks of subject 4: ");
    scanf("%f", &marks);
    total += marks;

    printf("Enter marks of subject 5: ");
    scanf("%f", &marks);
    total += marks;

    avg = total / 5;

    if (avg >= 90 && avg <= 100) {
        printf("The grade is HD");
    } else if (avg >= 80 && avg < 90) {
        printf("The grade is DI");
    } else if (avg >= 70 && avg < 80) {
        printf("The grade is CR");
    } else if (avg >= 50 && avg < 70) {
        printf("The grade is PA");
    } else if (avg >= 0 && avg < 50) {
        printf("The grade is FAIL");
    }
}

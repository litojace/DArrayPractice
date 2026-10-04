#include "DArray.h"

#include <iostream>

using namespace std;


void printResult(
    int testNumber,
    DArray& actual,
    DArray& expected
)
{
    cout << "TEST" << testNumber << "|";

    if (actual.compareArrays(expected))
        cout << "PASS|";
    else
        cout << "FAIL|";

    actual.printArray();
}


int main()
{
    DArray calling1;

    DArray parameter1;

    parameter1.addElement(6);
    parameter1.addElement(7);
    parameter1.addElement(2);
    parameter1.addElement(5);
    parameter1.addElement(3);

    calling1.copyOddFrom(parameter1);

    DArray expected1;

    expected1.addElement(7);
    expected1.addElement(5);
    expected1.addElement(3);

    printResult(
        1,
        calling1,
        expected1
    );


    DArray calling2;

    DArray parameter2;

    parameter2.addElement(2);
    parameter2.addElement(4);
    parameter2.addElement(9);
    parameter2.addElement(10);

    calling2.copyOddFrom(parameter2);

    DArray expected2;

    expected2.addElement(9);

    printResult(
        2,
        calling2,
        expected2
    );


    DArray calling3;

    DArray parameter3;

    parameter3.addElement(1);
    parameter3.addElement(3);
    parameter3.addElement(5);

    calling3.copyOddFrom(parameter3);

    DArray expected3;

    expected3.addElement(1);
    expected3.addElement(3);
    expected3.addElement(5);

    printResult(
        3,
        calling3,
        expected3
    );


    return 0;
}
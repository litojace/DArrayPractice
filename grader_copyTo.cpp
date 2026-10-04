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

    calling1.addElement(6);
    calling1.addElement(2);
    calling1.addElement(5);
    calling1.addElement(3);

    DArray parameter1;

    calling1.copyTo(parameter1);

    DArray expected1;

    expected1.addElement(6);
    expected1.addElement(2);
    expected1.addElement(5);
    expected1.addElement(3);

    printResult(
        1,
        parameter1,
        expected1
    );


    DArray calling2;

    calling2.addElement(10);

    DArray parameter2;

    calling2.copyTo(parameter2);

    DArray expected2;

    expected2.addElement(10);

    printResult(
        2,
        parameter2,
        expected2
    );


    DArray calling3;

    calling3.addElement(4);
    calling3.addElement(8);
    calling3.addElement(12);

    DArray parameter3;

    calling3.copyTo(parameter3);

    DArray expected3;

    expected3.addElement(4);
    expected3.addElement(8);
    expected3.addElement(12);

    printResult(
        3,
        parameter3,
        expected3
    );


    return 0;
}
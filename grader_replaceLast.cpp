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
    DArray test1;

    test1.addElement(6);
    test1.addElement(2);
    test1.addElement(5);
    test1.addElement(3);

    test1.replaceLast(99);

    DArray expected1;

    expected1.addElement(6);
    expected1.addElement(2);
    expected1.addElement(5);
    expected1.addElement(99);

    printResult(1, test1, expected1);


    DArray test2;

    test2.addElement(10);

    test2.replaceLast(25);

    DArray expected2;

    expected2.addElement(25);

    printResult(2, test2, expected2);


    DArray test3;

    test3.addElement(4);
    test3.addElement(8);
    test3.addElement(12);

    test3.replaceLast(-7);

    DArray expected3;

    expected3.addElement(4);
    expected3.addElement(8);
    expected3.addElement(-7);

    printResult(3, test3, expected3);


    return 0;
}
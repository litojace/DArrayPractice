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

    test1.zeroFirstHalf();

    DArray expected1;

    expected1.addElement(0);
    expected1.addElement(0);
    expected1.addElement(5);
    expected1.addElement(3);

    printResult(1, test1, expected1);


    DArray test2;

    test2.addElement(10);
    test2.addElement(20);

    test2.zeroFirstHalf();

    DArray expected2;

    expected2.addElement(0);
    expected2.addElement(20);

    printResult(2, test2, expected2);


    DArray test3;

    test3.addElement(1);
    test3.addElement(2);
    test3.addElement(3);
    test3.addElement(4);
    test3.addElement(5);
    test3.addElement(6);

    test3.zeroFirstHalf();

    DArray expected3;

    expected3.addElement(0);
    expected3.addElement(0);
    expected3.addElement(0);
    expected3.addElement(4);
    expected3.addElement(5);
    expected3.addElement(6);

    printResult(3, test3, expected3);


    return 0;
}
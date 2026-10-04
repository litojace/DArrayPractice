#include "DArray.h"

#include <iostream>

using namespace std;


void printResult(
    int testNumber,
    bool actual,
    bool expected
)
{
    cout << "TEST"
         << testNumber
         << "|";

    if (actual == expected)
        cout << "PASS|";
    else
        cout << "FAIL|";

    cout << boolalpha
         << actual
         << "\n";
}


int main()
{
    DArray test1;

    test1.addElement(6);
    test1.addElement(2);
    test1.addElement(5);
    test1.addElement(3);

    printResult(
        1,
        test1.search(5),
        true
    );


    DArray test2;

    test2.addElement(6);
    test2.addElement(2);
    test2.addElement(5);
    test2.addElement(3);

    printResult(
        2,
        test2.search(9),
        false
    );


    DArray test3;

    test3.addElement(7);

    printResult(
        3,
        test3.search(7),
        true
    );


    return 0;
}
#include "DArray.h"

#include <iostream>

using namespace std;


void printResult(
    int testNumber,
    DArray& calling,
    DArray& parameter,
    DArray& expectedCalling,
    DArray& expectedParameter
)
{
    cout << "TEST" << testNumber << "|";


    if (
        calling.compareArrays(
            expectedCalling
        ) &&
        parameter.compareArrays(
            expectedParameter
        )
    )
    {
        cout << "PASS|";
    }

    else
    {
        cout << "FAIL|";
    }


    cout << "calling = [";

    calling.printArray();

    cout << "], parameter = [";

    parameter.printArray();

    cout << "]\n";
}


int main()
{
    DArray calling1;

    calling1.addElement(6);
    calling1.addElement(2);
    calling1.addElement(5);

    DArray parameter1;

    parameter1.addElement(10);
    parameter1.addElement(20);

    calling1.exchangeFirst(
        parameter1
    );

    DArray expectedCalling1;

    expectedCalling1.addElement(10);
    expectedCalling1.addElement(2);
    expectedCalling1.addElement(5);

    DArray expectedParameter1;

    expectedParameter1.addElement(6);
    expectedParameter1.addElement(20);

    printResult(
        1,
        calling1,
        parameter1,
        expectedCalling1,
        expectedParameter1
    );


    DArray calling2;

    calling2.addElement(1);

    DArray parameter2;

    parameter2.addElement(9);

    calling2.exchangeFirst(
        parameter2
    );

    DArray expectedCalling2;

    expectedCalling2.addElement(9);

    DArray expectedParameter2;

    expectedParameter2.addElement(1);

    printResult(
        2,
        calling2,
        parameter2,
        expectedCalling2,
        expectedParameter2
    );


    DArray calling3;

    calling3.addElement(4);
    calling3.addElement(8);

    DArray parameter3;

    parameter3.addElement(7);
    parameter3.addElement(11);
    parameter3.addElement(15);

    calling3.exchangeFirst(
        parameter3
    );

    DArray expectedCalling3;

    expectedCalling3.addElement(7);
    expectedCalling3.addElement(8);

    DArray expectedParameter3;

    expectedParameter3.addElement(4);
    expectedParameter3.addElement(11);
    expectedParameter3.addElement(15);

    printResult(
        3,
        calling3,
        parameter3,
        expectedCalling3,
        expectedParameter3
    );


    return 0;
}
const problems =
[
    {
        id:
            "deleteSecond",

        title:
            "Problem 1: Delete an Element",

        description:
            "Write the definition of the member function " +
            "<b>deleteSecond</b>. " +
            "The function deletes the second element of the calling object.",

        parameters:
            "None",

        returnType:
            "void",

        assumptions:
            "The array contains at least two elements.",

        tests:
        [
            {
                input:
                    "[6, 2, 5, 3]",

                expected:
                    "[6, 5, 3]"
            },

            {
                input:
                    "[10, 20]",

                expected:
                    "[10]"
            },

            {
                input:
                    "[7, 8, 9, 10, 11]",

                expected:
                    "[7, 9, 10, 11]"
            }
        ]
    },


    {
        id:
            "swapSecondLast",

        title:
            "Problem 2: Swap Values",

        description:
            "Write the definition of the member function " +
            "<b>swapSecondLast</b>. " +
            "The function swaps the value stored in the second element " +
            "with the value stored in the last element.",

        parameters:
            "None",

        returnType:
            "void",

        assumptions:
            "The array contains at least two elements.",

        tests:
        [
            {
                input:
                    "[6, 2, 5, 3]",

                expected:
                    "[6, 3, 5, 2]"
            },

            {
                input:
                    "[10, 20]",

                expected:
                    "[10, 20]"
            },

            {
                input:
                    "[4, 8, 12, 16, 20]",

                expected:
                    "[4, 20, 12, 16, 8]"
            }
        ]
    },


    {
        id:
            "zeroFirstHalf",

        title:
            "Problem 3: Modify Elements",

        description:
            "Write the definition of the member function " +
            "<b>zeroFirstHalf</b>. " +
            "The function replaces every value in the first half " +
            "of the array with 0.",

        parameters:
            "None",

        returnType:
            "void",

        assumptions:
            "The array contains an even number of elements and contains at least two elements.",

        tests:
        [
            {
                input:
                    "[6, 2, 5, 3]",

                expected:
                    "[0, 0, 5, 3]"
            },

            {
                input:
                    "[10, 20]",

                expected:
                    "[0, 20]"
            },

            {
                input:
                    "[1, 2, 3, 4, 5, 6]",

                expected:
                    "[0, 0, 0, 4, 5, 6]"
            }
        ]
    },


    {
        id:
            "replaceLast",

        title:
            "Problem 4: Replace an Element",

        description:
            "Write the definition of the member function " +
            "<b>replaceLast</b>. " +
            "The function replaces the value stored in the last element " +
            "with the value passed by the parameter.",

        parameters:
            "An integer",

        returnType:
            "void",

        assumptions:
            "The array contains at least one element.",

        tests:
        [
            {
                input:
                    "[6, 2, 5, 3], value = 99",

                expected:
                    "[6, 2, 5, 99]"
            },

            {
                input:
                    "[10], value = 25",

                expected:
                    "[25]"
            },

            {
                input:
                    "[4, 8, 12], value = -7",

                expected:
                    "[4, 8, -7]"
            }
        ]
    },


    {
        id:
            "search",

        title:
            "Problem 5: Search for a Value",

        description:
            "Write the definition of the member function " +
            "<b>search</b>. " +
            "The function determines whether the value passed by the " +
            "parameter is stored in the array. " +
            "<b>Terminate the loop once the value is found.</b>",

        parameters:
            "An integer",

        returnType:
            "bool",

        assumptions:
            "The array contains at least one element and contains no duplicate values.",

        tests:
        [
            {
                input:
                    "[6, 2, 5, 3], value = 5",

                expected:
                    "true"
            },

            {
                input:
                    "[6, 2, 5, 3], value = 9",

                expected:
                    "false"
            },

            {
                input:
                    "[7], value = 7",

                expected:
                    "true"
            }
        ]
    },


    {
        id:
            "insertSecond",

        title:
            "Problem 6: Insert a New Element",

        description:
            "Write the definition of the member function " +
            "<b>insertSecond</b>. " +
            "The function inserts the value passed by the parameter " +
            "as the second element of the array. " +
            "Existing elements must remain in their original relative order.",

        parameters:
            "An integer",

        returnType:
            "void",

        assumptions:
            "The array contains at least one element and has enough capacity for one additional element.",

        tests:
        [
            {
                input:
                    "[6, 2, 5, 3], value = 99",

                expected:
                    "[6, 99, 2, 5, 3]"
            },

            {
                input:
                    "[10], value = 20",

                expected:
                    "[10, 20]"
            },

            {
                input:
                    "[4, 8, 12], value = 6",

                expected:
                    "[4, 6, 8, 12]"
            }
        ]
    },


    {
        id:
            "copyTo",

        title:
            "Problem 7: Copy to Another DArray",

        description:
            "Write the definition of the member function " +
            "<b>copyTo</b>. " +
            "The function copies all elements from the calling object " +
            "into the parameter object.",

        parameters:
            "A DArray object",

        returnType:
            "void",

        assumptions:
            "The calling object contains at least one element. " +
            "The parameter object is empty and has enough capacity.",

        tests:
        [
            {
                input:
                    "calling = [6, 2, 5, 3], parameter = []",

                expected:
                    "[6, 2, 5, 3]"
            },

            {
                input:
                    "calling = [10], parameter = []",

                expected:
                    "[10]"
            },

            {
                input:
                    "calling = [4, 8, 12], parameter = []",

                expected:
                    "[4, 8, 12]"
            }
        ]
    },


    {
        id:
            "copyOddFrom",

        title:
            "Problem 8: Copy from Another DArray",

        description:
            "Write the definition of the member function " +
            "<b>copyOddFrom</b>. " +
            "The calling object is initially empty. " +
            "Copy only the odd values from the parameter object " +
            "into the calling object. Preserve their original order.",

        parameters:
            "A DArray object",

        returnType:
            "void",

        assumptions:
            "The parameter object contains at least one element. " +
            "The calling object is empty and has enough capacity.",

        tests:
        [
            {
                input:
                    "calling = [], parameter = [6, 7, 2, 5, 3]",

                expected:
                    "[7, 5, 3]"
            },

            {
                input:
                    "calling = [], parameter = [2, 4, 9, 10]",

                expected:
                    "[9]"
            },

            {
                input:
                    "calling = [], parameter = [1, 3, 5]",

                expected:
                    "[1, 3, 5]"
            }
        ]
    },


    {
        id:
            "exchangeFirst",

        title:
            "Problem 9: Exchange Elements Between DArrays",

        description:
            "Write the definition of the member function " +
            "<b>exchangeFirst</b>. " +
            "The function exchanges the value stored in the first element " +
            "of the calling object with the value stored in the first " +
            "element of the parameter object.",

        parameters:
            "A DArray object",

        returnType:
            "void",

        assumptions:
            "Both objects contain at least one element.",

        tests:
        [
            {
                input:
                    "calling = [6, 2, 5], parameter = [10, 20]",

                expected:
                    "calling = [10, 2, 5], parameter = [6, 20]"
            },

            {
                input:
                    "calling = [1], parameter = [9]",

                expected:
                    "calling = [9], parameter = [1]"
            },

            {
                input:
                    "calling = [4, 8], parameter = [7, 11, 15]",

                expected:
                    "calling = [7, 8], parameter = [4, 11, 15]"
            }
        ]
    }
];



let currentProblem = 0;

const savedCode = {};



/* ===================================== */
/* PAGE ELEMENTS                         */
/* ===================================== */

const title =
    document.getElementById(
        "problem-title"
    );


const description =
    document.getElementById(
        "problem-description"
    );


const parameters =
    document.getElementById(
        "parameters"
    );


const returnType =
    document.getElementById(
        "return-type"
    );


const results =
    document.getElementById(
        "results"
    );


const previousButton =
    document.getElementById(
        "previous"
    );


const nextButton =
    document.getElementById(
        "next"
    );


const runButton =
    document.getElementById(
        "run"
    );


const resetButton =
    document.getElementById(
        "reset"
    );


const problemNumber =
    document.getElementById(
        "problem-number"
    );



/* ===================================== */
/* ASSUMPTIONS                           */
/* ===================================== */

const assumptionsParagraph =
    document.createElement("p");


assumptionsParagraph.innerHTML =
    `<strong>Assumptions:</strong>
     <span id="assumptions"></span>`;


returnType
    .parentElement
    .insertAdjacentElement(
        "afterend",
        assumptionsParagraph
    );


const assumptions =
    document.getElementById(
        "assumptions"
    );



/* ===================================== */
/* CODEMIRROR EDITOR                     */
/* ===================================== */

const codeTextArea =
    document.getElementById(
        "code"
    );


const editor =
    CodeMirror.fromTextArea(
        codeTextArea,

        {
            mode:
                "text/x-c++src",

            theme:
                "material-darker",

            lineNumbers:
                true,

            indentUnit:
                4,

            tabSize:
                4,

            indentWithTabs:
                false,

            smartIndent:
                true,

            electricChars:
                true,

            autoCloseBrackets:
                true,

            matchBrackets:
                true,

            styleActiveLine:
                true,

            lineWrapping:
                false,

            autofocus:
                true,

            extraKeys:
            {
                Tab:
                    function(cm)
                    {
                        if (
                            cm.somethingSelected()
                        )
                        {
                            cm.indentSelection(
                                "add"
                            );
                        }

                        else
                        {
                            cm.replaceSelection(
                                "    ",
                                "end"
                            );
                        }
                    },


                "Shift-Tab":
                    function(cm)
                    {
                        cm.indentSelection(
                            "subtract"
                        );
                    }
            }
        }
    );



/* ===================================== */
/* LOAD PROBLEM                          */
/* ===================================== */

function loadProblem()
{
    const problem =
        problems[currentProblem];


    title.innerHTML =
        problem.title;


    description.innerHTML =
        problem.description;


    parameters.textContent =
        problem.parameters;


    returnType.textContent =
        problem.returnType;


    assumptions.textContent =
        problem.assumptions;



    if (
        savedCode[currentProblem] !==
        undefined
    )
    {
        editor.setValue(
            savedCode[currentProblem]
        );
    }

    else
    {
        editor.setValue("");
    }



    problemNumber.textContent =
        `Problem ${currentProblem + 1} of ${problems.length}`;


    results.innerHTML =
        "No tests have been run yet.";


    previousButton.disabled =
        currentProblem === 0;


    nextButton.disabled =
        currentProblem ===
        problems.length - 1;


    editor.refresh();

    editor.focus();
}



/* ===================================== */
/* SAVE CURRENT CODE                     */
/* ===================================== */

function saveCurrentCode()
{
    savedCode[currentProblem] =
        editor.getValue();
}



/* ===================================== */
/* PREVIOUS                              */
/* ===================================== */

previousButton.addEventListener(
    "click",

    () =>
    {
        saveCurrentCode();


        if (currentProblem > 0)
        {
            --currentProblem;

            loadProblem();
        }
    }
);



/* ===================================== */
/* NEXT                                  */
/* ===================================== */

nextButton.addEventListener(
    "click",

    () =>
    {
        saveCurrentCode();


        if (
            currentProblem <
            problems.length - 1
        )
        {
            ++currentProblem;

            loadProblem();
        }
    }
);



/* ===================================== */
/* RESET                                 */
/* ===================================== */

resetButton.addEventListener(
    "click",

    () =>
    {
        editor.setValue("");


        savedCode[currentProblem] =
            "";


        results.innerHTML =
            "No tests have been run yet.";


        editor.focus();
    }
);



/* ===================================== */
/* RUN TESTS                             */
/* ===================================== */

runButton.addEventListener(
    "click",

    async () =>
    {
        const problem =
            problems[currentProblem];


        saveCurrentCode();


        results.innerHTML =
            "Running tests...";


        try
        {
            const response =
                await fetch(
                    "/run",

                    {
                        method:
                            "POST",

                        headers:
                        {
                            "Content-Type":
                                "application/json"
                        },

                        body:
                            JSON.stringify(
                            {
                                problem:
                                    problem.id,

                                code:
                                    editor.getValue()
                            })
                    }
                );


            const data =
                await response.json();


            if (!data.success)
            {
                results.innerHTML =
                    `<div class="compile-error">

                        <b>
                            Compilation failed.
                        </b>

                        <pre>${escapeHTML(data.error)}</pre>

                    </div>`;


                return;
            }


            gradeOutput(
                data.output,
                problem
            );
        }

        catch (error)
        {
            results.innerHTML =
                `<div class="compile-error">

                    <b>
                        Server error.
                    </b>

                    <pre>${escapeHTML(error.toString())}</pre>

                </div>`;
        }
    }
);



/* ===================================== */
/* GRADE OUTPUT                          */
/* ===================================== */

function gradeOutput(
    output,
    problem
)
{
    const lines =
        output
            .split(/\r?\n/)
            .filter(
                line =>
                    line.startsWith("TEST")
            );


    let html = "";

    let passed = 0;



    for (
        let i = 0;
        i < problem.tests.length;
        ++i
    )
    {
        const line =
            lines[i] || "";


        const pieces =
            line.split("|");


        const testPassed =
            pieces[1] === "PASS";


        const actual =
            pieces
                .slice(2)
                .join("|");


        if (testPassed)
        {
            ++passed;


            html +=
                `<div class="test-pass">

                    ✓ <b>
                        Test ${i + 1} passed
                    </b>

                    <br>

                    Input:
                    ${escapeHTML(
                        problem.tests[i].input
                    )}

                    <br>

                    Expected:
                    ${escapeHTML(
                        problem.tests[i].expected
                    )}

                </div>`;
        }

        else
        {
            html +=
                `<div class="test-fail">

                    ✕ <b>
                        Test ${i + 1} failed
                    </b>

                    <br>

                    Input:
                    ${escapeHTML(
                        problem.tests[i].input
                    )}

                    <br>

                    Expected:
                    ${escapeHTML(
                        problem.tests[i].expected
                    )}

                    <br>

                    Actual:
                    ${escapeHTML(
                        actual === ""
                            ? "No valid result"
                            : actual
                    )}

                </div>`;
        }
    }



    html +=
        `<hr>

        <b>
            ${passed} /
            ${problem.tests.length}
            tests passed
        </b>`;


    results.innerHTML =
        html;
}



/* ===================================== */
/* ESCAPE HTML                           */
/* ===================================== */

function escapeHTML(text)
{
    return String(text)

        .replaceAll(
            "&",
            "&amp;"
        )

        .replaceAll(
            "<",
            "&lt;"
        )

        .replaceAll(
            ">",
            "&gt;"
        );
}



/* ===================================== */
/* START                                 */
/* ===================================== */

loadProblem();
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



/* ========================================= */
/* STATE                                     */
/* ========================================= */

let currentProblem = 0;

let testsRunning = false;

const savedCode = {};

const savedResults = {};

const attemptedProblems = {};

const completedProblems = {};



/* ========================================= */
/* PAGE ELEMENTS                             */
/* ========================================= */

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


const assumptions =
    document.getElementById(
        "assumptions"
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


const problemProgress =
    document.getElementById(
        "problem-progress"
    );


const progressCount =
    document.getElementById(
        "progress-count"
    );


const passedCount =
    document.getElementById(
        "passed-count"
    );


const totalCount =
    document.getElementById(
        "total-count"
    );


const testProgressBar =
    document.getElementById(
        "test-progress-bar"
    );


const testIndicators =
    document.getElementById(
        "test-indicators"
    );


const codingPanel =
    document.getElementById(
        "coding-panel"
    );


const editorSection =
    document.getElementById(
        "editor-section"
    );


const resultsPanel =
    document.getElementById(
        "results-panel"
    );


const panelResizer =
    document.getElementById(
        "panel-resizer"
    );



/* ========================================= */
/* CODEMIRROR                                */
/* ========================================= */

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
                    },


                "Ctrl-Enter":
                    function()
                    {
                        runTests();
                    },


                "Cmd-Enter":
                    function()
                    {
                        runTests();
                    }
            }
        }
    );



/* ========================================= */
/* WAIT                                      */
/* ========================================= */

function wait(
    milliseconds
)
{
    return new Promise(
        resolve =>
        {
            setTimeout(
                resolve,
                milliseconds
            );
        }
    );
}



/* ========================================= */
/* SAVE CURRENT CODE                         */
/* ========================================= */

function saveCurrentCode()
{
    savedCode[currentProblem] =
        editor.getValue();
}



/* ========================================= */
/* LOCK / UNLOCK CONTROLS                    */
/* ========================================= */

function updateControls()
{
    previousButton.disabled =
        testsRunning ||
        currentProblem === 0;


    nextButton.disabled =
        testsRunning ||
        currentProblem ===
            problems.length - 1;


    resetButton.disabled =
        testsRunning;


    const problemButtons =
        problemProgress.querySelectorAll(
            ".problem-step"
        );


    problemButtons.forEach(
        button =>
        {
            button.disabled =
                testsRunning;
        }
    );
}



/* ========================================= */
/* PROBLEM PROGRESS                          */
/* ========================================= */

function renderProblemProgress()
{
    problemProgress.innerHTML =
        "";


    let completedCount =
        0;


    for (
        let i = 0;
        i < problems.length;
        ++i
    )
    {
        const button =
            document.createElement(
                "button"
            );


        button.type =
            "button";


        button.className =
            "problem-step";


        /*
            A problem can have one of three states:

            1. Not attempted
            2. Attempted
            3. Completed
        */
        if (
            completedProblems[i]
        )
        {
            button.classList.add(
                "completed"
            );


            button.textContent =
                "✓";


            button.setAttribute(
                "aria-label",
                `Problem ${i + 1}, completed`
            );


            ++completedCount;
        }

        else if (
            attemptedProblems[i]
        )
        {
            button.classList.add(
                "attempted"
            );


            button.textContent =
                i + 1;


            button.setAttribute(
                "aria-label",
                `Problem ${i + 1}, attempted`
            );
        }

        else
        {
            button.textContent =
                i + 1;


            button.setAttribute(
                "aria-label",
                `Problem ${i + 1}, not attempted`
            );
        }


        /*
            The current problem gets its own state
            in addition to attempted/completed.
        */
        if (
            i === currentProblem
        )
        {
            button.classList.add(
                "current"
            );
        }


        button.title =
            completedProblems[i]
                ? `Problem ${i + 1} — Completed`
                : attemptedProblems[i]
                    ? `Problem ${i + 1} — Attempted`
                    : `Problem ${i + 1} — Not attempted`;


        button.disabled =
            testsRunning;


        button.addEventListener(
            "click",

            () =>
            {
                if (
                    testsRunning ||
                    i === currentProblem
                )
                {
                    return;
                }


                saveCurrentCode();


                currentProblem =
                    i;


                loadProblem();
            }
        );


        problemProgress.appendChild(
            button
        );
    }


    progressCount.textContent =
        `${completedCount} / ${problems.length} completed`;


    updateControls();
}



/* ========================================= */
/* TEST INDICATORS                           */
/* ========================================= */

function createTestIndicators(
    numberOfTests
)
{
    testIndicators.innerHTML =
        "";


    for (
        let i = 0;
        i < numberOfTests;
        ++i
    )
    {
        const dot =
            document.createElement(
                "div"
            );


        dot.className =
            "test-dot";


        dot.textContent =
            i + 1;


        testIndicators.appendChild(
            dot
        );
    }
}



/* ========================================= */
/* EMPTY RESULTS                             */
/* ========================================= */

function resetResultsDisplay()
{
    const problem =
        problems[currentProblem];


    passedCount.textContent =
        "0";


    totalCount.textContent =
        problem.tests.length;


    testProgressBar.style.width =
        "0%";


    createTestIndicators(
        problem.tests.length
    );


    results.classList.remove(
        "running-results"
    );


    results.innerHTML =
        `
            <div class="empty-results">

                <div class="empty-results-icon">
                    &lt;/&gt;
                </div>

                <strong>
                    No tests have been run yet.
                </strong>

                <p>
                    Write your solution and run the tests.
                </p>

            </div>
        `;
}



/* ========================================= */
/* SAVE RESULT DISPLAY                       */
/* ========================================= */

function saveResultState()
{
    const dots =
        Array.from(
            testIndicators.children
        );


    savedResults[currentProblem] =
    {
        html:
            results.innerHTML,

        passed:
            passedCount.textContent,

        total:
            totalCount.textContent,

        progress:
            testProgressBar.style.width,

        indicators:
            dots.map(
                dot =>
                ({
                    className:
                        dot.className,

                    text:
                        dot.textContent
                })
            )
    };
}



/* ========================================= */
/* RESTORE RESULT DISPLAY                    */
/* ========================================= */

function restoreResultState(
    state
)
{
    results.classList.remove(
        "running-results"
    );


    results.innerHTML =
        state.html;


    passedCount.textContent =
        state.passed;


    totalCount.textContent =
        state.total;


    testProgressBar.style.width =
        state.progress;


    testIndicators.innerHTML =
        "";


    for (
        const indicator
        of state.indicators
    )
    {
        const dot =
            document.createElement(
                "div"
            );


        dot.className =
            indicator.className;


        dot.textContent =
            indicator.text;


        testIndicators.appendChild(
            dot
        );
    }
}



/* ========================================= */
/* LOAD PROBLEM                              */
/* ========================================= */

function loadProblem()
{
    document.body.classList.remove(
        "problem-changing"
    );


    void document.body.offsetWidth;


    document.body.classList.add(
        "problem-changing"
    );


    setTimeout(
        () =>
        {
            document.body.classList.remove(
                "problem-changing"
            );
        },

        350
    );


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


    renderProblemProgress();


    if (
        savedResults[currentProblem] !==
        undefined
    )
    {
        restoreResultState(
            savedResults[currentProblem]
        );
    }

    else
    {
        resetResultsDisplay();
    }


    updateControls();


    editor.refresh();


    editor.focus();
}



/* ========================================= */
/* PREVIOUS                                  */
/* ========================================= */

previousButton.addEventListener(
    "click",

    () =>
    {
        if (
            testsRunning
        )
        {
            return;
        }


        saveCurrentCode();


        if (
            currentProblem > 0
        )
        {
            --currentProblem;

            loadProblem();
        }
    }
);



/* ========================================= */
/* NEXT                                      */
/* ========================================= */

nextButton.addEventListener(
    "click",

    () =>
    {
        if (
            testsRunning
        )
        {
            return;
        }


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



/* ========================================= */
/* RESET                                     */
/* ========================================= */

resetButton.addEventListener(
    "click",

    () =>
    {
        if (
            testsRunning
        )
        {
            return;
        }


        editor.setValue("");


        savedCode[currentProblem] =
            "";


        delete savedResults[
            currentProblem
        ];


        delete attemptedProblems[
            currentProblem
        ];


        delete completedProblems[
            currentProblem
        ];


        resetResultsDisplay();


        renderProblemProgress();


        editor.focus();
    }
);



/* ========================================= */
/* RUN BUTTON                                */
/* ========================================= */

runButton.addEventListener(
    "click",
    runTests
);



/* ========================================= */
/* RUN TESTS                                 */
/* ========================================= */

async function runTests()
{
    if (
        testsRunning
    )
    {
        return;
    }


    const problem =
        problems[currentProblem];


    const testedProblem =
        currentProblem;



    saveCurrentCode();


    attemptedProblems[
        currentProblem
    ] =
        true;


    testsRunning =
        true;


    renderProblemProgress();


    runButton.disabled =
        true;


    runButton.classList.add(
        "running"
    );


    runButton.querySelector(
        ".run-text"
    ).textContent =
        "Running...";


    updateControls();


    passedCount.textContent =
        "0";


    totalCount.textContent =
        problem.tests.length;


    testProgressBar.style.width =
        "0%";


    createTestIndicators(
        problem.tests.length
    );


    updateControls();


    results.classList.add(
        "running-results"
    );


    results.innerHTML =
        `
            <div class="empty-results">

                <div class="empty-results-icon">
                    &lt;/&gt;
                </div>

                <strong>
                    Running tests...
                </strong>

                <p>
                    Compiling and checking your solution.
                </p>

            </div>
        `;


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
                            }
                        )
                }
            );


        const data =
            await response.json();


        if (
            testedProblem !==
            currentProblem
        )
        {
            return;
        }


        if (
            !data.success
        )
        {
            showCompileError(
                data.error
            );

            return;
        }


        await gradeOutput(
            data.output,
            problem
        );
    }

    catch (error)
    {
        if (
            testedProblem ===
            currentProblem
        )
        {
            showServerError(
                error
            );
        }
    }

    finally
    {
        testsRunning =
            false;


        runButton.disabled =
            false;


        runButton.classList.remove(
            "running"
        );


        runButton.querySelector(
            ".run-text"
        ).textContent =
            "Run Tests";


        updateControls();
    }
}



/* ========================================= */
/* COMPILER ERROR INFORMATION                */
/* ========================================= */

function getCompilerErrorInfo(
    error
)
{
    const text =
        String(error);


    const lines =
        text.split(/\r?\n/);


    let mainMessage =
        "The compiler found an error in your code.";


    let lineNumber =
        "";


    /*
        Look for the first real G++ error message.

        A typical message looks like:

        submission.cpp:5:10: error: expected ';' before '}'
    */
    for (
        const line of lines
    )
    {
        if (
            line.includes(
                "error:"
            )
        )
        {
            const errorIndex =
                line.indexOf(
                    "error:"
                );


            mainMessage =
                line
                    .substring(
                        errorIndex + 6
                    )
                    .trim();


            const locationMatch =
                line.match(
                    /:(\d+):\d+:\s*error:/
                );


                if (
                        locationMatch !== null
                    )
                    {
                        const compilerLine =
                            Number(
                                locationMatch[1]
                            );


                        /*
                            server.js adds these two lines before
                            the student's submitted code:

                            #include "DArray.h"
                            [blank line]

                            Therefore, G++ line numbers are two
                            lines ahead of the CodeMirror editor.
                        */
                        const editorLine =
                            compilerLine - 2;


                        if (
                            editorLine > 0
                        )
                        {
                            lineNumber =
                                editorLine;
                        }
                    }


            break;
        }
    }


    let tip =
        "Read the compiler message carefully and check the code near the reported location.";


    const lowerMessage =
        mainMessage.toLowerCase();


    /*
        Give a short learning hint for several common
        beginner C++ compilation errors.
    */
    if (
        lowerMessage.includes(
            "expected ';'"
        ) ||
        lowerMessage.includes(
            "expected ‘;’"
        ) ||
        lowerMessage.includes(
            "expected ';' before"
        )
    )
    {
        tip =
            "Check the statement immediately before this location. You may be missing a semicolon (;).";
    }

    else if (
        lowerMessage.includes(
            "was not declared"
        ) ||
        lowerMessage.includes(
            "not declared in this scope"
        )
    )
    {
        tip =
            "Check the spelling of the identifier and make sure it was declared before you use it.";
    }

    else if (
        lowerMessage.includes(
            "expected '}'"
        ) ||
        lowerMessage.includes(
            "expected ‘}’"
        )
    )
    {
        tip =
            "Check your curly braces. An opening { may be missing its matching closing }.";
    }

    else if (
        lowerMessage.includes(
            "expected ')'"
        ) ||
        lowerMessage.includes(
            "expected ‘)’"
        )
    )
    {
        tip =
            "Check your parentheses. An opening ( may be missing its matching closing ).";
    }

    else if (
        lowerMessage.includes(
            "no matching function"
        )
    )
    {
        tip =
            "Check the function name, number of arguments, and argument types.";
    }

    else if (
        lowerMessage.includes(
            "cannot convert"
        ) ||
        lowerMessage.includes(
            "invalid conversion"
        )
    )
    {
        tip =
            "The compiler found incompatible types. Check the type of the value you are assigning or passing.";
    }

    else if (
        lowerMessage.includes(
            "expected primary-expression"
        )
    )
    {
        tip =
            "Check the expression near this location for a missing value, operator, parenthesis, or other syntax problem.";
    }

    else if (
        lowerMessage.includes(
            "redefinition"
        )
    )
    {
        tip =
            "Something with this name has already been defined. Check for a duplicate variable or function definition.";
    }


    return {
        message:
            mainMessage,

        line:
            lineNumber,

        tip:
            tip
    };
}



/* ========================================= */
/* MARK TESTS AS NOT RUN                     */
/* ========================================= */

function markTestsNotRun()
{
    const dots =
        testIndicators.children;


    for (
        let i = 0;
        i < dots.length;
        ++i
    )
    {
        dots[i].classList.remove(
            "pass",
            "fail"
        );


        dots[i].classList.add(
            "not-run"
        );


        dots[i].textContent =
            "—";
    }
}



/* ========================================= */
/* COMPILE ERROR                             */
/* ========================================= */

function showCompileError(
    error
)
{
    results.classList.remove(
        "running-results"
    );


    passedCount.textContent =
        "0";


    testProgressBar.style.width =
        "0%";


    markTestsNotRun();


    delete completedProblems[
        currentProblem
    ];

    attemptedProblems[
    currentProblem
    ] =
        true;


    const errorInfo =
        getCompilerErrorInfo(
            error
        );


    let locationHTML =
        "";


    if (
        errorInfo.line !== ""
    )
    {
        locationHTML =
            `
                <span class="error-line-badge">
                    Line ${escapeHTML(
                        errorInfo.line
                    )}
                </span>
            `;
    }


    results.innerHTML =
        `
            <div class="error-card compile-error-card">

                <div class="error-card-heading">

                    <div class="error-icon">
                        !
                    </div>

                    <div>

                        <div class="error-title">
                            Compilation Error
                        </div>

                        <div class="error-subtitle">
                            Your solution could not be compiled.
                        </div>

                    </div>

                </div>


                <div class="error-main-message">

                    <div class="error-label">
                        Main compiler message
                    </div>

                    <div class="error-message-row">

                        ${locationHTML}

                        <code>
                            ${escapeHTML(
                                errorInfo.message
                            )}
                        </code>

                    </div>

                </div>


                <div class="error-tip">

                    <div class="error-tip-title">
                        Tip
                    </div>

                    <div>
                        ${escapeHTML(
                            errorInfo.tip
                        )}
                    </div>

                </div>


                <details class="error-details">

                    <summary>
                        View full compiler output
                    </summary>

                    <pre>${escapeHTML(
                        error
                    )}</pre>

                </details>

            </div>
        `;


    saveResultState();


    renderProblemProgress();
}



/* ========================================= */
/* SERVER / RUNTIME ERROR                    */
/* ========================================= */

function showServerError(
    error
)
{
    results.classList.remove(
        "running-results"
    );


    passedCount.textContent =
        "0";


    testProgressBar.style.width =
        "0%";


    markTestsNotRun();


    delete completedProblems[
        currentProblem
    ];

    attemptedProblems[
        currentProblem
        ] =
            true;


    const errorText =
        String(error);


    let titleText =
        "Runtime Error";


    let descriptionText =
        "Your code could not finish running successfully.";


    let tipText =
        "Check your array indexes, loops, and any operations that could access invalid memory.";


    if (
        errorText
            .toLowerCase()
            .includes(
                "too long"
            ) ||
        errorText
            .toLowerCase()
            .includes(
                "timeout"
            )
    )
    {
        titleText =
            "Time Limit Exceeded";


        descriptionText =
            "Your code started running, but it did not finish in time.";


        tipText =
            "Check your loop condition and make sure the loop eventually stops. An infinite loop is a common cause.";
    }


    results.innerHTML =
        `
            <div class="error-card runtime-error-card">

                <div class="error-card-heading">

                    <div class="error-icon">
                        !
                    </div>

                    <div>

                        <div class="error-title">
                            ${escapeHTML(
                                titleText
                            )}
                        </div>

                        <div class="error-subtitle">
                            ${escapeHTML(
                                descriptionText
                            )}
                        </div>

                    </div>

                </div>


                <div class="error-tip">

                    <div class="error-tip-title">
                        Things to check
                    </div>

                    <div>
                        ${escapeHTML(
                            tipText
                        )}
                    </div>

                </div>


                <details class="error-details">

                    <summary>
                        View technical details
                    </summary>

                    <pre>${escapeHTML(
                        errorText
                    )}</pre>

                </details>

            </div>
        `;


    saveResultState();


    renderProblemProgress();
}

/* ========================================= */
/* GRADE OUTPUT                              */
/* ========================================= */

function formatActual(
    actual,
    problemId
)
{
    const cleaned =
        actual.trim();


    if (
        cleaned === ""
    )
    {
        return "No valid result";
    }


    /*
        Boolean results should stay as:
        true
        false
    */
    if (
        problemId === "search"
    )
    {
        return cleaned;
    }


    /*
        exchangeFirst has two DArrays in its result,
        so keep the grader's formatted output.
    */
    if (
        problemId === "exchangeFirst"
    )
    {
        return cleaned;
    }


    /*
        All remaining problems return one DArray.
        The graders print values separated by spaces.

        Example:
            6 5 3

        Display as:
            [6, 5, 3]
    */
    const values =
        cleaned
            .split(/\s+/)
            .filter(
                value =>
                    value !== ""
            );


    return (
        "[" +
        values.join(", ") +
        "]"
    );
}



/* ========================================= */
/* CREATE RESULT CARD                        */
/* ========================================= */

function createResultCard(
    testPassed,
    testNumber,
    test,
    formattedActual
)
{
    const card =
        document.createElement(
            "div"
        );


    card.className =
        testPassed
            ? "test-pass"
            : "test-fail";


    const symbol =
        testPassed
            ? "✓"
            : "✕";


    const status =
        testPassed
            ? "passed"
            : "failed";


    card.innerHTML =
        `
            ${symbol} <b>
                Test ${testNumber} ${status}
            </b>

            <div class="result-detail">

                Input:
                ${escapeHTML(
                    test.input
                )}

                <br>

                Expected:
                ${escapeHTML(
                    test.expected
                )}

                <br>

                Actual:
                ${escapeHTML(
                    formattedActual
                )}

            </div>
        `;


    return card;
}



/* ========================================= */
/* GRADE OUTPUT                              */
/* ========================================= */

async function gradeOutput(
    output,
    problem
)
{
    results.classList.remove(
        "running-results"
    );


    const lines =
        output
            .split(/\r?\n/)
            .filter(
                line =>
                    line.startsWith(
                        "TEST"
                    )
            );


    const testResults =
        [];


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
            pieces[1] ===
            "PASS";


        const actual =
            pieces
                .slice(2)
                .join("|");


        const formattedActual =
            formatActual(
                actual,
                problem.id
            );


        testResults.push(
            {
                passed:
                    testPassed,

                actual:
                    formattedActual
            }
        );
    }


    /*
        Clear the "Running tests..." message.

        The test cards will now be inserted one at a
        time so the student can see the grader work
        through the tests.
    */
    results.innerHTML =
        "";


    passedCount.textContent =
        "0";


    totalCount.textContent =
        problem.tests.length;


    testProgressBar.style.width =
        "0%";


    createTestIndicators(
        problem.tests.length
    );


    const dots =
        testIndicators.children;


    let passed =
        0;


    /*
        Reveal each test one at a time.
    */
    for (
        let i = 0;
        i < problem.tests.length;
        ++i
    )
    {
        const currentResult =
            testResults[i];


        if (
            currentResult.passed
        )
        {
            ++passed;


            dots[i].classList.add(
                "pass"
            );


            dots[i].textContent =
                "✓";
        }

        else
        {
            dots[i].classList.add(
                "fail"
            );


            dots[i].textContent =
                "✕";
        }


        const card =
            createResultCard(
                currentResult.passed,
                i + 1,
                problem.tests[i],
                currentResult.actual
            );


        results.appendChild(
            card
        );


        /*
            Update the score as each test appears.
        */
        passedCount.textContent =
            passed;


        const progress =
            (
                (i + 1) /
                problem.tests.length
            ) * 100;


        testProgressBar.style.width =
            `${progress}%`;


        /*
            Keep the newest result visible if the
            results area needs to scroll.
        */
        card.scrollIntoView(
            {
                behavior:
                    "smooth",

                block:
                    "nearest"
            }
        );


        /*
            Small pause before revealing the next test.
        */
        await wait(
            350
        );
    }


    /*
        Add the final result summary only after all
        individual tests have been revealed.
    */
    const summary =
        document.createElement(
            "div"
        );



if (
    passed ===
    problem.tests.length
)
{
    summary.className =
        "result-summary all-passed";


    summary.innerHTML =
        `
            <div class="success-summary-left">

                <div class="success-summary-icon">
                    ✓
                </div>

                <div>
                    <span class="success-summary-title">
                        All tests passed!
                    </span>

                    <span class="success-summary-subtitle">
                        Nice work — your solution passed every test.
                    </span>
                </div>

            </div>

            <strong>
                ${passed} /
                ${problem.tests.length}
            </strong>
        `;
}

else
{
    summary.className =
        "result-summary";


    summary.innerHTML =
        `
            <span>
                Tests completed
            </span>

            <strong>
                ${passed} /
                ${problem.tests.length}
                passed
            </strong>
        `;
}


results.appendChild(
    summary
);


    const wasAlreadyCompleted =
    completedProblems[
        currentProblem
    ] === true;


attemptedProblems[
    currentProblem
] =
    true;


if (
    passed ===
    problem.tests.length
)
{
    completedProblems[
        currentProblem
    ] =
        true;
}

else
{
    delete completedProblems[
        currentProblem
    ];
}


saveResultState();


renderProblemProgress();


/*
    Only play the completion animation when the
    problem changes from incomplete to completed.

    Re-running an already completed problem will
    not replay the animation every time.
*/
if (
    passed ===
        problem.tests.length &&
    !wasAlreadyCompleted
)
{
    const currentStep =
        problemProgress.querySelector(
            ".problem-step.current"
        );


    if (
        currentStep !== null
    )
    {
        currentStep.classList.add(
            "just-completed"
        );


        setTimeout(
            () =>
            {
                currentStep.classList.remove(
                    "just-completed"
                );
            },

            700
        );
    }
}


    //saveResultState();


    //renderProblemProgress();
}



/* ========================================= */
/* ESCAPE HTML                               */
/* ========================================= */

function escapeHTML(
    text
)
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



/* ========================================= */
/* PANEL RESIZER                             */
/* ========================================= */

let resizing =
    false;


panelResizer.addEventListener(
    "pointerdown",

    event =>
    {
        resizing =
            true;


        document.body.classList.add(
            "resizing-panels"
        );


        panelResizer.classList.add(
            "dragging"
        );


        panelResizer.setPointerCapture(
            event.pointerId
        );
    }
);


panelResizer.addEventListener(
    "pointermove",

    event =>
    {
        if (
            !resizing
        )
        {
            return;
        }


        resizeEditorToPointer(
            event.clientY
        );
    }
);


panelResizer.addEventListener(
    "pointerup",

    event =>
    {
        resizing =
            false;


        document.body.classList.remove(
            "resizing-panels"
        );


        panelResizer.classList.remove(
            "dragging"
        );


        if (
            panelResizer.hasPointerCapture(
                event.pointerId
            )
        )
        {
            panelResizer.releasePointerCapture(
                event.pointerId
            );
        }
    }
);


panelResizer.addEventListener(
    "pointercancel",

    () =>
    {
        resizing =
            false;


        document.body.classList.remove(
            "resizing-panels"
        );


        panelResizer.classList.remove(
            "dragging"
        );
    }
);



/* ========================================= */
/* RESIZE EDITOR                             */
/* ========================================= */

function resizeEditorToPointer(
    pointerY
)
{
    const panelRect =
        codingPanel.getBoundingClientRect();


    const dividerHeight =
        panelResizer.offsetHeight;


    const minimumEditorHeight =
        250;


    const minimumResultsHeight =
        190;


    const maximumEditorHeight =
        panelRect.height -
        minimumResultsHeight -
        dividerHeight;


    let newEditorHeight =
        pointerY -
        panelRect.top;


    newEditorHeight =
        Math.max(
            minimumEditorHeight,
            Math.min(
                newEditorHeight,
                maximumEditorHeight
            )
        );


    editorSection.style.height =
        `${newEditorHeight}px`;


    editorSection.style.flex =
        "0 0 auto";


    editor.refresh();
}



/* ========================================= */
/* KEYBOARD RESIZER                          */
/* ========================================= */

panelResizer.addEventListener(
    "keydown",

    event =>
    {
        if (
            event.key !==
            "ArrowUp" &&
            event.key !==
            "ArrowDown"
        )
        {
            return;
        }


        event.preventDefault();


        const panelRect =
            codingPanel.getBoundingClientRect();


        const editorRect =
            editorSection.getBoundingClientRect();


        let newHeight =
            editorRect.height;


        if (
            event.key ===
            "ArrowUp"
        )
        {
            newHeight -=
                25;
        }

        else
        {
            newHeight +=
                25;
        }


        const minimumEditorHeight =
            250;


        const minimumResultsHeight =
            190;


        const maximumEditorHeight =
            panelRect.height -
            minimumResultsHeight -
            panelResizer.offsetHeight;


        newHeight =
            Math.max(
                minimumEditorHeight,
                Math.min(
                    newHeight,
                    maximumEditorHeight
                )
            );


        editorSection.style.height =
            `${newHeight}px`;


        editorSection.style.flex =
            "0 0 auto";


        editor.refresh();
    }
);



/* ========================================= */
/* WINDOW RESIZE                             */
/* ========================================= */

window.addEventListener(
    "resize",

    () =>
    {
        editor.refresh();
    }
);



/* ========================================= */
/* START                                     */
/* ========================================= */

loadProblem();
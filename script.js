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

const savedCode = {};

const savedResults = {};

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
/* SAVE CURRENT CODE                         */
/* ========================================= */

function saveCurrentCode()
{
    savedCode[currentProblem] =
        editor.getValue();
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


        if (
            i === currentProblem
        )
        {
            button.classList.add(
                "current"
            );
        }


        if (
            completedProblems[i]
        )
        {
            button.classList.add(
                "completed"
            );

            button.textContent =
                "✓";

            ++completedCount;
        }

        else
        {
            button.textContent =
                i + 1;
        }


        button.title =
            `Problem ${i + 1}`;


        button.addEventListener(
            "click",

            () =>
            {
                if (
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
        `${completedCount} / ${problems.length}`;
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


    previousButton.disabled =
        currentProblem === 0;


    nextButton.disabled =
        currentProblem ===
        problems.length - 1;


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
        editor.setValue("");


        savedCode[currentProblem] =
            "";


        delete savedResults[
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
        runButton.disabled
    )
    {
        return;
    }


    const problem =
        problems[currentProblem];


    const testedProblem =
        currentProblem;


    saveCurrentCode();


    runButton.disabled =
        true;


    runButton.classList.add(
        "running"
    );


    runButton.querySelector(
        ".run-text"
    ).textContent =
        "Running...";


    passedCount.textContent =
        "0";


    totalCount.textContent =
        problem.tests.length;


    testProgressBar.style.width =
        "0%";


    createTestIndicators(
        problem.tests.length
    );


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


        gradeOutput(
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
        runButton.disabled =
            false;


        runButton.classList.remove(
            "running"
        );


        runButton.querySelector(
            ".run-text"
        ).textContent =
            "Run Tests";
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


    delete completedProblems[
        currentProblem
    ];


    results.innerHTML =
        `
            <div class="compile-error">

                <b>
                    Compilation failed.
                </b>

                <pre>${escapeHTML(error)}</pre>

            </div>
        `;


    saveResultState();


    renderProblemProgress();
}



/* ========================================= */
/* SERVER ERROR                              */
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


    delete completedProblems[
        currentProblem
    ];


    results.innerHTML =
        `
            <div class="compile-error">

                <b>
                    Server error.
                </b>

                <pre>${escapeHTML(error.toString())}</pre>

            </div>
        `;


    saveResultState();


    renderProblemProgress();
}



/* ========================================= */
/* GRADE OUTPUT                              */
/* ========================================= */

function gradeOutput(
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


    let html =
        "";


    let passed =
        0;


    const dots =
        testIndicators.children;


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


        if (
            testPassed
        )
        {
            ++passed;


            dots[i].classList.add(
                "pass"
            );


            dots[i].textContent =
                "✓";


            html +=
                `
                    <div
                        class="test-pass"
                        style="animation-delay: ${i * 0.04}s"
                    >

                        ✓ <b>
                            Test ${i + 1} passed
                        </b>

                        <div class="result-detail">

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
                                    ? problem.tests[i].expected
                                    : actual
                            )}

                        </div>

                    </div>
                `;
        }

        else
        {
            dots[i].classList.add(
                "fail"
            );


            dots[i].textContent =
                "✕";


            html +=
                `
                    <div
                        class="test-fail"
                        style="animation-delay: ${i * 0.04}s"
                    >

                        ✕ <b>
                            Test ${i + 1} failed
                        </b>

                        <div class="result-detail">

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

                        </div>

                    </div>
                `;
        }
    }


    const percentage =
        (
            passed /
            problem.tests.length
        ) * 100;


    passedCount.textContent =
        passed;


    totalCount.textContent =
        problem.tests.length;


    testProgressBar.style.width =
        `${percentage}%`;


    html +=
        `
            <div class="result-summary">

                <span>
                    Tests completed
                </span>

                <strong>
                    ${passed} /
                    ${problem.tests.length}
                    passed
                </strong>

            </div>
        `;


    results.innerHTML =
        html;


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
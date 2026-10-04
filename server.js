const express = require("express");
const fs = require("fs");
const { execFile } = require("child_process");
const path = require("path");
const os = require("os");

const app = express();

app.use(
    express.json(
        {
            limit: "20kb"
        }
    )
);

app.use(express.static(__dirname));


app.post("/run", (req, res) =>
{
    const code = req.body.code;
    const problem = req.body.problem;

    const graders =
    {
        deleteSecond:
            "grader_deleteSecond.cpp",

        swapSecondLast:
            "grader_swapSecondLast.cpp",

        zeroFirstHalf:
            "grader_zeroFirstHalf.cpp",

        replaceLast:
            "grader_replaceLast.cpp",

        search:
            "grader_search.cpp",

        insertSecond:
            "grader_insertSecond.cpp",

        copyTo:
            "grader_copyTo.cpp",

        copyOddFrom:
            "grader_copyOddFrom.cpp",

        exchangeFirst:
            "grader_exchangeFirst.cpp"
    };


    const graderFile =
        graders[problem];


    if (graderFile === undefined)
    {
        res.json(
            {
                success: false,
                error: "Unknown problem."
            }
        );

        return;
    }


    if (typeof code !== "string")
    {
        res.json(
            {
                success: false,
                error: "Invalid code submission."
            }
        );

        return;
    }


    const tempDirectory =
        fs.mkdtempSync(
            path.join(
                os.tmpdir(),
                "darray-"
            )
        );


    const submissionFile =
        path.join(
            tempDirectory,
            "submission.cpp"
        );


    const executableFile =
        path.join(
            tempDirectory,
            "grader"
        );


    const darrayPath =
        path.join(
            __dirname,
            "DArray.cpp"
        );


    const graderPath =
        path.join(
            __dirname,
            graderFile
        );


    const submission =
`#include "DArray.h"

${code}
`;


    fs.writeFileSync(
        submissionFile,
        submission
    );


    execFile(
        "g++",

        [
            "-std=c++17",
            "-I",
            __dirname,
            darrayPath,
            submissionFile,
            graderPath,
            "-o",
            executableFile
        ],

        {
            timeout: 10000,
            maxBuffer: 1024 * 1024
        },

        (
            compileError,
            stdout,
            stderr
        ) =>
        {
            if (compileError)
            {
                fs.rmSync(
                    tempDirectory,
                    {
                        recursive: true,
                        force: true
                    }
                );


                let errorMessage =
                    stderr;


                if (
                    compileError.killed ||
                    compileError.signal
                )
                {
                    errorMessage =
                        "Compilation took too long and was stopped.";
                }


                res.json(
                    {
                        success: false,
                        error: errorMessage
                    }
                );

                return;
            }


            execFile(
                executableFile,

                [],

                {
                    timeout: 3000,
                    maxBuffer: 1024 * 1024
                },

                (
                    runError,
                    runStdout,
                    runStderr
                ) =>
                {
                    fs.rmSync(
                        tempDirectory,
                        {
                            recursive: true,
                            force: true
                        }
                    );


                    if (runError)
                    {
                        let errorMessage =
                            runStderr;


                        if (
                            runError.killed ||
                            runError.signal
                        )
                        {
                            errorMessage =
                                "Your program took too long to run and was stopped. Check for an infinite loop.";
                        }


                        if (errorMessage === "")
                        {
                            errorMessage =
                                "The program stopped unexpectedly.";
                        }


                        res.json(
                            {
                                success: false,
                                error: errorMessage
                            }
                        );

                        return;
                    }


                    res.json(
                        {
                            success: true,
                            output: runStdout
                        }
                    );
                }
            );
        }
    );
});


const PORT =
    process.env.PORT || 3000;


app.listen(
    PORT,
    "0.0.0.0",

    () =>
    {
        console.log(
            `DArray Practice is running on port ${PORT}!`
        );


        if (PORT === 3000)
        {
            console.log(
                "Open http://localhost:3000"
            );
        }
    }
);
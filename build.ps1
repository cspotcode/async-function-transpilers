#!/usr/bin/env powershell
uglifyjs --compress --mangle --output input.min.js input.js
uglifyjs --compress --mangle --output babel-output.min.js babel-output.js
# uglifyjs --compress --mangle --output babel-output2.min.js babel-output2.js
uglifyjs --compress --mangle --output tsc-output.min.js tsc-output.js

function compareSizes($ext) {
    $inputLength = (gi input$ext).length
    echo input$ext babel-output$ext tsc-output$ext | gi | % {
        [pscustomobject]@{
            name = $_.name;
            length = $_.length;
            inflation = "{0:N1}%" -f ($_.length / $inputLength * 100);
        }
    }
}
& {
    compareSizes .js
    compareSizes .min.js
} > size-comparison.txt

#!/usr/bin/env powershell

$files = echo input babel-output tsc-output tsc-output-downleveliteration

# Minify
$files | % {
    uglifyjs --compress --mangle --toplevel --output "$($_).min.js" "$($_).js"
}

function compareSizes($ext) {
    $inputLength = (gi input$ext).length
    $files | % { "$_$ext" } | gi | % {
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

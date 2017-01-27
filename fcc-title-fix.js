/*

I use this so I can copy and paste the lesson titles from FCC and immediately 
make them into a filename format. :)

*/






///
function convertStringToJSFileFormat() {
    var str; // = prompt("What Title would you like converted to a JS file", " ");
    str = "What Title would you like converted to a JS file";
        if (str != null){
            console.log(str.replace(/\W+/g, "-").trim().toLowerCase());
        }

    }   


    convertStringToJSFileFormat();
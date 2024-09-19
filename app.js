
//startup message
if (!process.argv[2]) {

    console.log(`
        -------------------------------------------------------
        PASSWORD GENERATOR
        -------------------------------------------------------

        --help

        --length
        --capitalize
        --numbers
        --symbols

        --generate

        `);  

}


//for loop that cycles through process.argv to check for flags
for (let i = 0; i < process.argv.length; i++) {

    //length flag
    if (process.argv[i].includes("--length")) {
        var length = parseInt(process.argv[i].split("=")[1]);
        
        if (!isNaN(length)) {
            console.log("Password length set to: " + length);
        } else {
            throw new Error(`
                Password length must be a number

                Try --help length
                `);
        } 
    }





    //password generation
    if (process.argv[i].includes("--generate")) {

        let characters = "abcdefghijklmnopqrstuvwxyz";
        
        //customizable flags
        if (process.argv.includes("--capatalize")) {
            characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        } else if (process.argv.includes("--numbers")) {
            characters += "0123456789"
        } else if (process.argv.includes("--symbols")) {
            characters += "!@#$%^&*"
        }

        let result = " ";
        const charactersLength = characters.length;

        if (length) {
            for ( let ii = 0; ii < length; ii++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
        } else {
            for ( let ii = 0; ii < 8; ii++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
        }


        console.log("")
        console.log("Generated password:" + result)
        console.log("")

    }


}   





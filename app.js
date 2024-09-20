#!/usr/bin/env node

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

    //help flag
    if (process.argv[i].includes("--help")) {
        let helponly = true
        
        if (process.argv.includes("--length")) {
            helponly = false

            console.log(`
                The length flag is used to change the length of the
                generated password, by deafult the length is 8.

                This is how to use the length flag:
                
                "--length=[number] --generate"
                `)
        }
        if (process.argv.includes("--capitalize")) {
            helponly = false

            console.log(`
                The capitalize flag is used to add capital letters
                to the generated password.

                This is how to use the capitalize flag:
                
                "--capitalize --generate"
                `)
        }
        if (process.argv.includes("--numbers")) {
            helponly = false

            console.log(`
                The numbers flag is used to add numbers
                to the generated password.
                
                This is how to use the numbers flag:
                
                "--numbers --generate"
                `)
        }
        if (process.argv.includes("--symbols")) {
            helponly = false

            console.log(`
                The symbols flag is used to add symbols
                to the generated password.
                
                This is how to use the symbols flag:
                
                "--symbols --generate"
                `)
        }
        if (process.argv.includes("--generate")) {
            helponly = false

            console.log(`
                The generate flag is used to generate the password.
                
                This is how to use the generate flag:
                
                "--generate"
                `)
        }
        if (helponly == true) {
            console.log(`
                This program is used to generate passwords, so you don't have to!

                Need help with using the other flags? This is how
                to use the help flag:
                
                "--help [other flag]"

                Example:

                "--help --generate" 

                Try it out!
                `)
        }

    }
    

    //length flag
    if (process.argv[i].includes("--length") && !process.argv.includes("--help")) {
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
    if (process.argv[i].includes("--generate") && !process.argv.includes("--help")) {

        let characters = "abcdefghijklmnopqrstuvwxyz";
        
        //customizable flags
        if (process.argv.includes("--capitalize")) {
            characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            console.log("Capitalization added to password")
        }
        if (process.argv.includes("--numbers")) {
            characters += "0123456789"
            console.log("Numbers added to password")
        }
        if (process.argv.includes("--symbols")) {
            characters += "!@#$%^&*"
            console.log("Symbols added to password")
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





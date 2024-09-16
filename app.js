
//startup message
if (!process.argv[2]) {

    console.log(`
        -------------------------------------------------------
        PASSWORD GENERATOR
        -------------------------------------------------------

        --help

        --length
        --capatalize
        --numbers
        --symbols

        --generate

        `);  

}



//password generation

if (process.argv.includes("--generate")) {

//let characterpool = "";


const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
let length = 8

let result = " ";
const charactersLength = characters.length;
for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
}

console.log("")
console.log("Generated password:" + result)
console.log("")


};


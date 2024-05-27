function reverseString1(str){
    let stArray=str.split("").reverse().join("");
    console.log(stArray)
}
function reverseString2(str){
    let newstr="";
    for(let i=0; i<str.length; i++){
        newstr+=str[str.length-(i+1)]
    }
    console.log(newstr)
}

reverseString1("sun saheb ptb")
reverseString2("sun pello hi")
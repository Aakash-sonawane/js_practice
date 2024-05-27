let str1='pRace'
let str2='carep'

function isAnagram(str1,str2){

if(str1.length!==str2.length){
    console.log('not anagram');
    return;
}
let s1 =str1.toLowerCase().split('').sort()
let s2 =str2.toLowerCase().split('').sort()
for(let i=0; i<s1.length; i++){
    if(s1[i]!=s2[i]){
        console.log('not anagram');
        return;
    }
}
console.log('anagram');
}
isAnagram(str1,str2);
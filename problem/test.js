let ar1=[1,2,3,4,5,5,6,7,5,7,10,9,5];
ar1.sort()
let first=0;
let ans=0;

for (let index = 0; index < ar1.length; index++) {
    if(first<=ans && ar1[index]>ans){
first=ans;
ans=ar1[index]
    }


    


}
console.log(first)
console.log(ans)




// let filterArr=ar1.filter((val)=>{
// return val===5;
// })

// console.log(filterArr.length)
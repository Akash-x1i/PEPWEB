const array = [12, 23, 34, 45, 56 ,67, 78, 89]

// finds the first element matching the condition:
// const pass = array.find((ele)=>{
//     // console.log(ele>35)
//     return ele>35;
// })
// console.log(pass);


// filters all value more than 35:
// const res = array.filter((ele)=>{
//     return ele>35;
// })
// res.map((i)=>{
//     console.log(i);
// })


array.reduce((a,s)=>{
    console.log(a, " ", s);
})
// array = [1, 2, 3, 4, 5]

// array.map((element)=>{
//     console.log(element)
// })


const data = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())        //parsing to json
.then((data)=>                  //converting to array
    data.map((user)=>{          //iterating over each object inside the array 
    console.log("User Details: ", user.name);
  })
)

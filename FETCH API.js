// const url = "https://6241ec0e76c4fb91f67c62eb.mockapi.io/FETCHapi";

// var table= document.createElement("table")

// // Traditional way to fetch data from  API


// async function fetchApi(url) {
//     let data = await fetch(url);
//     if (data.ok) {
//         const res = data.json()
//         return res;
//     }
//     else {
//         return data.status;
//     }
// }

// let load_data = fetchApi(url);

// load_data.then((value) => {
//     value.forEach(element => {
//        console.log(element.name);
//        console.log(element.avatar);

//     });
    
    
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Successful");
// });

// Modern way to fetch data from API

// const url = "https://6241ec0e76c4fb91f67c62eb.mockapi.io/FETCHapi";

// fetch(url).then((data)=> data.json())
// .then((response)=> console.log(JSON.stringify(response)))



const url = "https://6241ec0e76c4fb91f67c62eb.mockapi.io/FETCHapi";

fetch(url).then((data) =>data.json())
    .then((response)=>{
    let data1 = "";
    response.map((item)=>{
        data1 += `
        
                <td>${item.createdAt}</td>
                <td>${item.name}</td>
                <td><img src=${item.avatar}
                        alt="user"></td>
                <td>${item.id}</td>
                <td><button>View</button></td>`
})
document.getElementsByTagName("table").innerHTML =data1;
    console.log((response))
})
.catch((err)=> {
    console.log(err)
});
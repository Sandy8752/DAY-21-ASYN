fetch("https://fakestoreapi.com/products")
.then((data) => data.json())
.then((result) =>{
    let data1="";
    result.map((item) =>{
        data1 += `<div class="card">
        <h1 class="title">${item.title}</h1>
        <p class="category">${item.category}</p>
        <img class="images" src=${item.image} alt="image">
        <p class="description">${item.description}</p>
        
        <p class="price">${item.price}</p>
    </div>`
    });
    document.getElementById("cards").innerHTML=data1;
})
.catch((err)=>{
    console.log(err);
})
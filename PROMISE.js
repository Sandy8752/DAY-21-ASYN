const url = "https://pokeapi.co/api/v2/pokemon?limit=50";

function Api(url){
    let fromApi = new Promise(function(resolve,reject){
    const request = new XMLHttpRequest();
    request.open("GET" , url)
    request.onload=function(){
        if(request.status ==200){
            resolve(request.responseText)
            console.log(request.responseText)
        }else{
            reject("ERROR");
        }
    };
request.send();
})
return fromApi;
}

let promise = Api(url)
const Api_promise = () =>{
promise.then(
    (result) => {
        console.log("success");
    },
    (error)=>{
        console.log("Error with the url")
    }
);
}
Api_promise()

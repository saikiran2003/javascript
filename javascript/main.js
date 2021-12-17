function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

loadjson("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
})

function display(cse){

    for(var k=1;k<cse.length;k++){
        console.log(k)
    }
}

// cards area
var rdata=document.querySelector(".row")
console.log(rdata)
// card
var cad=document.createElement("div")
    cad.classList.add("card")
    console.log(cad)
//img
var pic=document.createElement("img")
console.log(pic)

var sname=document.createElement("h1")
sname.textContent


     


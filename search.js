// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();
import { news } from "./fetch.js";
let searchnews=(e)=>{
    if(e.key=="Enter")
    {
        let search=document.getElementById("search_id").value;
      
        news(search).then((data)=>{
            let result=document.getElementById("results");
            console.log(data)
             appen(result, data.articles)
        })
         
    }

}
document.getElementById("search_id").addEventListener("keydown",searchnews);
let appen=(container,data)=>{
    data.forEach=((el)=>{
        let image=document.createElement("img");
        image.src=el.url;
        let h3=document.createElement("h3");
        h3.innerText=el.title;
        let p=document.createElement("p");
        p.innerText=el.description;
        let new1=document.querySelector(".news");
        new1.append(image,h3,p);
       
       container.append(new1);

    });
        
  

} 
// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
// link:https://masai-mock-api.herokuapp.com/news/top-headlines?country=in
import navbar from "../components/navbar.js";
let nav=document.getElementById("navbar");
nav.innerHTML=navbar();
import { sidebar } from "../components/sidebar.js";
let side =document.getElementById("sidebar");
side.innerHTML=sidebar();


import { news } from "./fetch.js";
let searchnews=(e)=>{
    if(e.key=="Enter")
    {
        window.location.href="search.html";
        let search=document.getElementById("search_id").value;
      
        news(search).then((data)=>{


            console.log(data.articles)

        })
         
    }

}
document.getElementById("search_id").addEventListener("keydown",searchnews)
// let defaultnews= async()=>{

//     try{
//         let side=document.getElementById("sidebar").children;
//         for(var i in side )
//         {
//           let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${side[i]}`); 
//           console.log(res); 
//         }
        
        
//         let data=await res.json();
     
//        console.log(data)
          

//     }
//     catch(err){
//         console.log("err:",err)
//     }

// }
// console.log(defaultnews());

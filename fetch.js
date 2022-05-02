let   news= async(search)=>{

    try{
        
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${search}`);
        let data=await res.json();
        return data;



    }
    catch(err){
        console.log("err:",err)
    }

}

export {news};


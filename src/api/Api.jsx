const baseURL = "https://api.unsplash.com";
// const API_KEY = process.env.API_KEY;
// console.log(API_KEY);

export const trendingImages = async () => {
    try{
        const data = await fetch(`${baseURL}/photos/?client_id=d2I2djtYvTsuwhpjZr_M6ObJmcjgBhhOtEmtRPKaYNg`);
        if(!data.ok){
            console.error("failed", data.status);
            return;
        }
        const json =await data.json();
        console.log(data.status);
        console.log(json);
        return json;
    }catch(error){
        console.error("error in making request", error);
    }
    
};

export const searchImages = async (query) => {
    // const url = new URL(`${baseURL}/search/photos/?client_id=d2I2djtYvTsuwhpjZr_M6ObJmcjgBhhOtEmtRPKaYNg&query=${query}`)
    // url.search = new URLSearchParams({
    //     per_page: 30,
    //     query: query,
    // })
    try{
        const data = await fetch(`${baseURL}/search/photos/?client_id=d2I2djtYvTsuwhpjZr_M6ObJmcjgBhhOtEmtRPKaYNg&query=${query}`);
        if(!data.ok){
            console.error("failed", data.status);
            return;
        }
        const json =await data.json();
        console.log(data.status);
        console.log(json);
        return json.results;
    }catch(error){
        console.error("error in making request", error);
    }
    
};
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"

const TMBD_TOKEN = import.meta.env.VITE_APP_TMBD_TOKEN

const headers = {
    Authorization : "bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTA4ZGZjYzAyYmZiY2U4ZWFkNDM2ZmMwYzQ1YjkwMSIsInN1YiI6IjY0NWM1MTk1ZmUwNzdhNWNhZWRhY2EzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YPqTFKYuDSXrclU9IRXRF60Ql2v_nXbAuLZI9xSEvao"
}

export const fetchDataFromApi = async (url, params) =>{
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers, 
            params
        })
        return data


    }catch (err){
        console.log(err)
        return err
    }
}
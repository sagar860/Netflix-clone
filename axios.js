import axios from "axios";

// base url to make requests to the movie database

const instance = axios.create({
    // baseURL:"https://api.themoviedb.org/3/movie/550?api_key=fffab536dc8b05cbeada4bcf8ea29d93",
    baseURL :"https://api.themoviedb.org/3/movie/76341?api_key=fffab536dc8b05cbeada4bcf8ea29d93",
});
export default instance; 

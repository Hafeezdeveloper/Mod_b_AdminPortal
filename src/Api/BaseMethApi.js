import axios from "axios";

let HandleApi = axios.create( {
    baseURL:"https://jsonplaceholder.typicode.com"
})

const Posts = (endPoint) =>{
        return HandleApi.get(endPoint)
}   

export default Posts;

import axios from "axios";

export default async function getData (Number) {
    const {data : users} = await axios ("https://jsonplaceholder.typicode.com/users/" + Number)

    const {data : posts} = await axios (`https://jsonplaceholder.typicode.com/posts?userId=${Number}&/id=${Number}`)
    
    return  {"users" : users, "posts" : posts}
};


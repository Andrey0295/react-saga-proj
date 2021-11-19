export const postsService = {
    getPostsService,
    deletePostsService
    
};


function getPostsService(){

    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json" },
      };
    
      return fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)

}

function deletePostsService(id: any){

    const requestOptions = {
        method: "DELETE",
        headers: {"Content-Type": "application/json" },
      };
    
      return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, requestOptions)

}
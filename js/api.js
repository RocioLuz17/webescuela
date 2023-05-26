const url_api = "https://jsonplaceholder.typicode.com/posts/1/comments"
fetch(url_api)
.then( response  =>response.json())
.then(data=> {console.log(data)})
.catch(err=>console.log(err))

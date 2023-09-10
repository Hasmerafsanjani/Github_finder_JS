console.log("script file linked");

const form = document.getElementById("searchbar");
  function getUsers(){
    const api_url="https://api.github.com/users"
    const promise = fetch(api_url)
  console.log(promise);

  promise.then((resp)=>{
    return resp.json()
  }).then((data)=>{
    console.log(data)
  })
}
  getUsers()
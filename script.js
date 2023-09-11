console.log("script file linked");

const searchbar = document.getElementById("searchbar");
const cardcontainer = document.getElementById("cardcontainer")
const searchButton = document.getElementById("searchBtn")

searchButton.addEventListener("click", (ele) => {
    ele.preventDefault(); 
    const searchValue = searchbar.value
    getUsers(searchValue)
})

  function getUsers(searchValue){
   let api_url

    if(searchValue=== undefined){
        api_url=`https://api.github.com/users`
    }else{
        api_url=`https://api.github.com/users/${searchValue}`
    }

    let result 
    const promise = fetch(api_url)
  console.log(promise);

  promise.then((resp)=>{
    return resp.json()
  }).then((data)=>{
    let result = data

    if(searchValue===undefined){
        result.map((ele) => {
            const card = document.createElement("div")
            const heading = document.createElement("h2")
            const paragraph = document.createElement("p")
            const img = document.createElement("img")
            const link = document.createElement("a")
              heading.innerText = ele.login
               img.src = ele.avatar_url
              link.href = ele.html_url
              link.innerHTML= "Github Link"
              card.appendChild(img)
              card.appendChild(heading)
              card.appendChild(link)
              cardcontainer.appendChild(card)
        })
    }else{
        cardcontainer.innerHTML="";
         if(result.message === "Not Found"){
            const heading = document.createElement("h1")
            heading.innerText = "Nhi hai bhai yaha pe "
            cardcontainer.appendChild(heading)
         }else{

             const card = document.createElement("div")
             const heading = document.createElement("h2")
             const paragraph = document.createElement("p")
             const img = document.createElement("img")
             const link = document.createElement("a")
               heading.innerText = result.login
                img.src = result.avatar_url
               link.href = result.html_url
               link.innerHTML= "Github Link"
               card.appendChild(img)
               card.appendChild(heading)
               card.appendChild(link)
               cardcontainer.appendChild(card)
         }
    }
 })
}
  getUsers()  
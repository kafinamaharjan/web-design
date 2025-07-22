//sychronous and asychronous communication - await//
async function getReceipeList(){
    const url="https://dummyjson.com/recipes"
    
    const response=await fetch(url)
    const data = await response.json()
    const result = document.getElementById("result")
    result.innerHTML=`<h1>Receipe App</h1>
    ${renderReceipelist(data)}
        `
    // console.log(data)
    
}
function renderReceipelist(data){
    console.log("render>>>",data)
    var receipes=""
    for(let i=0;i<data.recipes.length;i++){
        receipes= receipes + `
        <ul><li><h5>${data.recipes[i].name}</h5></li>
        <ol><li><h6>${data.recipes[i].cookTimeMinutes}minutes</h6></li>
        <li><h6>${data.recipes[i].difficulty}</h6></li>
        </ol>
        </ul>
        `
    }
return `
<div>
${data.total}
${receipes}
</div>
`
    }
getReceipeList()


// async function getReceipeDetail(){
//     const url="https://dummyjson.com/recipes/2"

//     const response=await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }
// getReceipeDetail()

async function getReceipeDetail(id){
    const url=`https://dummyjson.com/recipes/${id}`

    const response=await fetch(url)
    const data = await response.json()
    console.log(data)
    const result= document.getElementById("resultdetail")
    const value = renderReceipedetail(data)

    console.log(value,'value >>>')
    result.innerHTML=renderReceipedetail(data)
}
function renderReceipedetail(data){
    console.log("render detail>>>",data)

    
   return `
        <h3>${data.name}</h3>
        
    `
}

getReceipeDetail(12)

// async function searchReceipe(){
//     const url="https://dummyjson.com/recipes/search?q=Chicken"

//     const response=await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }
// searchReceipe()

async function searchReceipe(search){
    const url=`https://dummyjson.com/recipes/search?q=${search}`

    const response=await fetch(url)
    const data = await response.json()
    console.log(data)
}
searchReceipe("salad")

async function addReceipe(){
    const url="https://dummyjson.com/recipes/add"
 const response=await fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
//   headers: { 'Content-Type': 'multipart/form-data'},
  body: JSON.stringify({
    name: 'Tasty Pizza'
    /* other recipe data */
  })
})
// .then(res => res.json())
// .then(console.log);
 const data = await response.json()
    console.log(data)
}
addReceipe()

const summary_item = document.querySelector("#summary_item")

fetch("data.json")
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse)
    //jsonResponse is an array with objects within it
  })

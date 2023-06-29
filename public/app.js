const summary_items = document.querySelector("#summary_items")

fetch("data.json")
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse)
    jsonResponse.forEach((object) => {
      const summarySection = document.createElement("div")
      const sectionImg = document.createElement("img")
      const sectionTitle = document.createElement("div")
      const sectionScore = document.createElement("div")
      const scoreTotal = document.createElement("span")

      console.log(object.category)
      console.log(object.score)
      console.log(object.icon)
    })
  })

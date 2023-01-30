const btnEle = document.getElementById("btn")
const jokeEle = document.getElementById("pg")

const apiKey = "+TVuWfYenMTUS6LKAp7bHw==99lfRmFqFVH1ZV2f"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    },
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {
    try {
        jokeEle.innerText = "Updating..."
        btnEle.disabled = true
        btnEle.innerText = "Loading..."

        const response = await fetch(apiURL, options)
        const data = await response.json()

        btnEle.disabled = false
        btnEle.innerText = "Tell Us a Joke"

        jokeEle.innerText = (data[0].joke)
    } catch (error) {
        jokeEle.innerText = ("An error occured! \n Check your internet connection")
        btnEle.disabled = false
        btnEle.innerText = "Tell Us a Joke"

        console.log(error)
    }

}

btnEle.addEventListener("click", getJoke)
let URL = "https://hindi-jokes-api.onrender.com/jokes?api_key=f157bd29a35e11372ef58954361c";
let datat = document.querySelector("#Dummy");
let btn = document.querySelector("#getJokesButton")

function getJokes() {
    fetch(URL).then(
        (response) => {
            return response.json();
        }
    ).then((data) => {
        console.log(data);
        datat.innerText = data.jokeContent;
    })
}
btn.addEventListener("click", getJokes);

alert("To read more, click चुटकुले more times");
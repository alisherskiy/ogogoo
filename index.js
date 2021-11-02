const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://aws.random.cat/meow"

async function fetchHandler() {
    try {
        const response = await fetch(url)
        const data = await response.json();

        image.src = data.file;
    } catch (error) {
        console.log(error);
    }
}

fetchHandler()

button.addEventListener('click', () => {
    let loaded = image.complete;

    if (loaded) {
        fetchHandler()
    }
});
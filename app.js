async function getGif(term) {
  try {
    const params = {
      params: {
        api_key: "projkrv8mK62pOT7BXFyCzyIWMQ1b3IU",
        tag: document.getElementById("input").value.trim(),
      },
    };
    const res = await axios.get("https://api.giphy.com/v1/gifs/random", params);
    //Create new Gif:
    const gif = document.createElement("img");
    //set the source and attributes
    gif.src = res.data.data.images.original.url;
    gif.alt = res.data.data.title;
    gif.width = 250;
    gif.height = 250;
    //add the image to its container
    const gifContainer = document.getElementById("gif-container");
    gifContainer.appendChild(gif);
  } catch (e) {
    alert("Not found please try again ");
  }
}

const searchButton = document.querySelector("#search");
searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  getGif();
  input.value = "";
});

//The button below is not part of the assignment, just extra practice.
// api key = projkrv8mK62pOT7BXFyCzyIWMQ1b3IU
async function getCatGif() {
  const res = await axios.get(
    `https://api.giphy.com/v1/gifs/random?api_key=projkrv8mK62pOT7BXFyCzyIWMQ1b3IU&limit=1&tag=cat`
  );
  //Create a new image
  const img = document.createElement("img");
  //set the source and attributes
  img.src = res.data.data.images.original.url;
  img.alt = "Random Cat Gif";
  img.width = 250;
  img.height = 250;
  //add the image to the container
  const catContainer = document.getElementById("cat-container");
  catContainer.appendChild(img);
}

const catButton = document.querySelector("#randomCatGif");
catButton.addEventListener("click", function (e) {
  e.preventDefault();
  getCatGif();
});

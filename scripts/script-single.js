const showMore = document.getElementById("more-trigger");
const filmDescription = document.getElementById("film-description");
const episodesSummery = document.getElementsByClassName("episode-summery");
showMore.addEventListener("click", (event) => {
  filmDescription.style.height = "100%";
  for (const episode of episodesSummery) {
    episode.style.display = "block";
  }
  showMore.style.display = "none";
});

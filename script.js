// Create a class here
// =====================================
class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}
let firstEpisode = new Episode("le langage C# pour les nuls", 120, false);
let secondEpisode = new Episode("le langage PHP pour les nuls", 120, true);
let thirdEpisode = new Episode("le langage JavaScript pour les nuls", 120, true);
// =====================================

document.querySelector("#first-episode-info").innerText = `Episode: ${
  firstEpisode.title
}
  Duration: ${firstEpisode.duration} min
  ${firstEpisode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;

document.querySelector("#second-episode-info").innerText = `Episode: ${
  secondEpisode.title
}
  Duration: ${secondEpisode.duration} min
  ${secondEpisode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;

document.querySelector("#third-episode-info").innerText = `Episode: ${
  thirdEpisode.title
}
  Duration: ${thirdEpisode.duration} min
  ${thirdEpisode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;

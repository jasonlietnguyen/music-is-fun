function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  function drawSongs(songList) {
    console.log(songList)
    var ele = document.getElementById("songs")
    var template = ''
    // This is where you task begins
    for (var i = 0; i < 50; i++) {
      var currentSong = songList[i];
      template += `
        <div class="col-lg-4 box">
          <h4>$${currentSong.price}</h4>
          <img src="${currentSong.albumArt}" alt="" height="200px">
          <marquee onclick="document.getElementById('id${currentSong.trackId}').play()"><h1>${currentSong.title}</h1></marquee>
          <h3 class="thin">${currentSong.artist}</h3><br>
          <audio controls id="id${currentSong.trackId}">
            <source src="${currentSong.preview}" type="audio/ogg">
          </audio>
        </div>
        `
    }
    ele.innerHTML = template;


    $(function () {
      $("audio").on("play", function () {
        $("audio").not(this).each(function (index, audio) {
          audio.pause();
        });
      });
    });

  }

}



var itunesCtrl = new ItunesController()

function ItunesService(){

    this.getMusicByArtist = function(artist, cb) {
      
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      
      $('#get-music-button').text('LOADING....');
      
      return $.getJSON(apiUrl).then(function(response){
        var songList = response.results.map(function (song) {
                  return {
                      trackId: song.trackId,
                      title: song.trackName,
                      albumArt: song.artworkUrl100,
                      artist: song.artistName,
                      collection: song.collectionName,
                      price: song.collectionPrice,
                      preview: song.previewUrl
                    };
                })
        $('#get-music-button').text('GET MUSIC');
        return songList;
      })
    }
}
function Song(artist, title) {
  this.artist = artist;
  this.title = title;
}

function Playlist() {
  this.songs = [];
  this.songIndex = 0;
  this.isPlaying = false;
  this.add = function (song) {
    this.songs.push(song);
  };
  this.play = function () {
    this.isPlaying = true;
    return this.songs[this.songIndex].artist + " started to play";
  };
  this.stop = function () {
    this.isPlaying = false;
    return this.songs[this.songIndex].artist + " stopped";
  };
  this.next = function () {
    if (this.songIndex === this.songs.length - 1) {
      let indexCurrent = this.songIndex;
      this.songIndex = 0;
      return (
        this.songs[indexCurrent].artist +
        " stopped, " +
        this.songs[0].artist +
        " started"
      );
    }

    this.songIndex++;
    return (
      this.songs[this.songIndex - 1].artist +
      " stopped, " +
      this.songs[this.songIndex].artist +
      " started"
    );
  };
}

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");

playlist.add(heyJude);
playlist.add(jaded);

console.log(playlist.play()); // Hey Jude started to play
console.log(playlist.next()); // Hey Jude stopped, Jaded started
console.log(playlist.next()); // Jaded stopped, Hey Jude started
console.log(playlist.stop()); // Hey Jude stopped
console.log(playlist.play()); // Hey Jude started

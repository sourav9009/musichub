const musicFiles =
document.getElementById("musicFiles");

const musicList =
document.getElementById("musicList");

const audioPlayer =
document.getElementById("audioPlayer");

const songName =
document.getElementById("songName");

const downloadBtn =
document.getElementById("downloadBtn");

const search =
document.getElementById("search");


let songs = [];


// upload Music

musicFiles.addEventListener("change",function(event) {

    const files = Array.from(event.target.files);

    files.forEach(function(file) {
    
        const url = URL.createObjectURL(file);
    
        songs.push({

            name: file.name,

            url: url,

            file: file

        });

    });

    displaySongs();

});


// display music 

function displaySongs(filter = "") {

    musicList.innerHTML = "";

    const filteredSongs =
songs.filter(function(song) {
       return
song.name.toLowerCase().includes(filter.toLowerCase());
    });
    
    if (filteredSongs.length === 0) {
        musicList.innerHTML = "<p sclass='empty'>No songs found.</p>";       
       return;

    }


    filteredSongs.forEach(function(song) {

        const div =
document.createElement("div");

        div.className = "song";

        div.textContent = " " + song.name;

        div.addEventListener("click", function()
{

            playSong(song);

        });

        musicList.appendChild(div);

   });

}


// play music

function playSong(song) {

    audioPlayer.src = song.url;

    songName.textContent = song.name;

    audioPlayer.play();

    downloadBtn.href = song.url;

    downloadBtn.hidden = false;

}


// search music

search.addEventListener("input", function() {

    displaySongs(search.value);

});


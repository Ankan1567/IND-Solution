function playsmusic() {
    let start = new Audio('/IndexMusic.mp3');

    start.play();

    console.log("This JavaScript is Running and Music is Playing")

    localStorage.setItem('Music Name','IndexMusic.mp3');
}

setTimeout(playsmusic, 2000)

function deletestorage() {
    console.clear();

    localStorage.clear('Music Name')
}

setTimeout(deletestorage, 163000)
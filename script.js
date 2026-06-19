const playlist = [
    "music/acidjazzedevening.mod",
    "music/afterburner-razor1911.xm",
    "music/paso-lost_scrotum.mod",
    "music/pleasure-to-paso.mod",
    "music/aryx.s3m",
    "music/addiction.mod",
    "music/rez19116.XM",
];
let currentSong = 0;
let chiptune = null;

window['libopenmpt'] = {}
libopenmpt.locateFile = (path) => "./chiptune2/" + path;
libopenmpt.onRuntimeInitialized = () => {
    const config = new ChiptuneJsConfig({
        repeatCount: 0,
    })
    chiptune = new ChiptuneJsPlayer(config);
}

window.playTrack = (url) => {
    chiptune.load(url, (buffer) => {
        chiptune.play(buffer);
        chiptune.onEnded(() => {
            currentSong = (currentSong + 1) % playlist.length;
            playTrack(playlist[currentSong]);
        });
    });
}


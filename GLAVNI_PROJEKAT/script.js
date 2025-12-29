function updateCountdown() {
    // Cilj: Ponoć između 31. decembra 2025. i 1. januara 2026.
    const targetDate = new Date('January 1, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
        document.getElementById('clock').innerText = "SREĆNA 2026!";
        return;
    }

    // Kalkulacija
    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((difference % (1000 * 60)) / 1000);

    // Prikaz u HTML-u uz proveru da li elementi postoje
    const clockEl = document.getElementById('clock');
    const daysEl = document.getElementById('days');

    if (clockEl) {
        clockEl.innerText = 
            String(h).padStart(2, '0') + ":" + 
            String(m).padStart(2, '0') + ":" + 
            String(s).padStart(2, '0');
    }

    if (daysEl) {
        daysEl.innerText = d + " DAYS COUNTDOWN";
    }
}

// Pokreni odmah i postavi interval
setInterval(updateCountdown, 1000);
updateCountdown();
var player;
// 1. Učitavanje YouTube API-ja
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. Kreiranje plejera kada se API učita
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'B5K7zZ2Nc5c', // ID tvog Bee Gees videa
        playerVars: {
            'listType': 'playlist',
            'list': 'RDB5K7zZ2Nc5c', // Tvoja plejlista
            'autoplay': 0,
            'controls': 0
        }
    });
}

// 3. Funkcija za dugme
function toggleYouTube() {
    var btn = document.getElementById("radio-btn");
    var state = player.getPlayerState();

    if (state == YT.PlayerState.PLAYING) {
        player.pauseVideo();
        btn.innerText = "🔊 PLAY BEE GEES MIX";
    } else {
        player.playVideo();
        btn.innerText = "⏸ PAUSE MUSIC";
    }
}
var player;

// 1. Učitavanje YouTube API-ja
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. Kreiranje plejera sa LOOP i VOLUME podešavanjima
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'B5K7zZ2Nc5c', // Glavni video
        playerVars: {
            'listType': 'playlist',
            'list': 'RDB5K7zZ2Nc5c', // Plejlista
            'autoplay': 0,
            'controls': 0,
            'loop': 1,
            'playlist': 'B5K7zZ2Nc5c' // Neophodno za loop
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Postavljanje jačine zvuka na 50% čim je plejer spreman
function onPlayerReady(event) {
    event.target.setVolume(50); 
}

// Ako se video završi, pusti ga ponovo (dupla sigurnost za loop)
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo();
    }
}

// 3. Funkcija za dugme (Pusti/Pauziraj + Efekat pulsiranja)
function toggleYouTube() {
    var btn = document.getElementById("radio-btn");
    var state = player.getPlayerState();

    if (state == YT.PlayerState.PLAYING) {
        player.pauseVideo();
        btn.innerText = "🔊 PLAY BEE GEES MIX";
        btn.classList.remove("playing"); // Gasi pulsiranje
    } else {
        player.playVideo();
        btn.innerText = "⏸ PAUSE MUSIC";
        btn.classList.add("playing");    // Pali pulsiranje
    }
}
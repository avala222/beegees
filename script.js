// --- AUTOMATSKI TAJMER ---
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Određuje cilj: ako je danas 2025, cilj je 2026. Ako je sutra 2026, cilj je 2027.
    const targetDate = new Date(`January 1, ${currentYear + 1} 00:00:00`).getTime();
    const difference = targetDate - now.getTime();

    // Menja broj godine u HTML-u (2026 -> 2027)
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.innerText = currentYear + 1;
    }

    const clockEl = document.getElementById('clock');
    const daysEl = document.getElementById('days');

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((difference % (1000 * 60)) / 1000);

    if (clockEl) {
        clockEl.innerText = String(h).padStart(2, '0') + ":" + String(m).padStart(2, '0') + ":" + String(s).padStart(2, '0');
    }
    if (daysEl) {
        daysEl.innerText = d + " DAYS COUNTDOWN";
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// --- MUZIKA ---
var player;
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '1',
        width: '1',
        videoId: 'B5K7zZ2Nc5c',
        playerVars: {
            'listType': 'playlist',
            'list': 'RDB5K7zZ2Nc5c',
            'autoplay': 0,
            'controls': 0
        },
        events: {
            'onReady': function(event) {
                event.target.setVolume(100);
            }
        }
    });
}

function toggleYouTube() {
    var btn = document.getElementById("radio-btn");
    if (player && typeof player.getPlayerState === 'function') {
        var state = player.getPlayerState();
        if (state == 1) {
            player.pauseVideo();
            btn.innerText = "🔊 PLAY BEE GEES MIX";
        } else {
            player.playVideo();
            btn.innerText = "⏸ PAUSE MUSIC";
        }
    }
}

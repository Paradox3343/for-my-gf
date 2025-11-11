// Calculate days since falling in love
const loveDate = new Date('2025-01-01T00:00:01');
const today = new Date();
const timeDiff = today - loveDate;
const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

document.getElementById('loveCounter').textContent = 
    `It has been ${daysDiff} wonderful days since I fell in love with you!`;

// Strawberry gift surprise
document.getElementById('strawberryGift').addEventListener('click', function() {
    const surprise = document.getElementById('surpriseContent');
    surprise.classList.toggle('hidden');
    
    if (!surprise.classList.contains('hidden')) {
        // Play meow sound when revealed
    const meow = new Audio('https://www.soundjay.com/nature/sounds/snow-01.mp3');
meow.play().catch(e => console.log("Audio play failed:", e));
    }
});
// Create snowflakes
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.innerHTML = '❄️';
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = (Math.random() * 20 + 10) + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's, ' + Math.random() * 3 + 2 + 's';
    snowflake.style.animationDelay = Math.random() * 5 + 's';
    document.getElementById('snowflakes').appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

// Generate snowflakes
setInterval(createSnowflake, 100);

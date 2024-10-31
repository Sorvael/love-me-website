// Selecting buttons
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const container = document.querySelector('.container');

// Function to check if two elements overlap
function isOverlapping(elem1, elem2) {
    const rect1 = elem1.getBoundingClientRect();
    const rect2 = elem2.getBoundingClientRect();
    
    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}

// Function to move the "No" button to a random location without overlapping the "Yes" button
noBtn.addEventListener('mouseover', () => {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    let randomX, randomY;
    
    do {
        randomX = Math.floor(Math.random() * (containerWidth - noBtn.offsetWidth));
        randomY = Math.floor(Math.random() * (containerHeight - noBtn.offsetHeight));

        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    } while (isOverlapping(noBtn, yesBtn)); // Ensure no overlap with "Yes" button
});

// When "Yes" button is clicked, change the content
yesBtn.addEventListener('click', () => {
    container.innerHTML = `
        <h1 class="aww-message">Aww I knew it, I love you too! 💖</h1>
        <img src="https://media.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif" alt="Blushing Cat">
    `;
});

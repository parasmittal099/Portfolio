function toggleCard(card) {
    const dayList = card.querySelector('.day-list');
    if (dayList.style.display === 'none') {
        dayList.style.display = 'block';
    } else {
        dayList.style.display = 'none';
    }
}

window.onload = function() {
    // ...existing code...
};


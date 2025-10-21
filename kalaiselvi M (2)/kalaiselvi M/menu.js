function filterCards(category) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    if (category === 'all' || cardCategory === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}
window.onload = () => {
  filterCards('all');
};

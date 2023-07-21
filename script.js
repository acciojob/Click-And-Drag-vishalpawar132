// Your code here.
 const itemsContainer = document.querySelector('.items');
  let isDragging = false;
  let startPosition = 0;
  let scrollLeft = 0;

  itemsContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosition = e.pageX - itemsContainer.offsetLeft;
    scrollLeft = itemsContainer.scrollLeft;
    itemsContainer.classList.add('active');
  });

  itemsContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    itemsContainer.classList.remove('active');
  });

  itemsContainer.addEventListener('mouseup', () => {
    isDragging = false;
    itemsContainer.classList.remove('active');
  });

  itemsContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - itemsContainer.offsetLeft;
    const walk = (x - startPosition) * 2; // Adjust scroll speed here
    itemsContainer.scrollLeft = scrollLeft - walk;
  });
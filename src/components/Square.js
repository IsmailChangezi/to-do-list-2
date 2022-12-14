import Done from '../media/done.png';

const Square = (item) => {
  const square = document.createElement('div');
  square.classList.add('square');
  const doneImage = document.createElement('img');
  doneImage.src = Done;
  doneImage.addEventListener('click', (e) => {
    e.stopPropagation();
    const incompleted = new CustomEvent('itemincomplete', {
      detail: {
        index: item.index,
      },
    });
    const tasksConatiner = document.querySelector('.list-container');
    tasksConatiner.dispatchEvent(incompleted);
  });
  if (item.completed) {
    square.classList.add('square_checked');
    square.appendChild(doneImage);
  }
  square.addEventListener('click', () => {
    const completed = new CustomEvent('itemcompleted', {
      detail: {
        index: item.index,
      },
    });
    const tasksConatiner = document.querySelector('.list-container');
    tasksConatiner.dispatchEvent(completed);
  });

  return square;
};

export default Square;
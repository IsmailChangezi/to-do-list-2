import Refresh from '../media/refresh.png';

const HeadLine = () => {
  const container = document.createElement('div');
  container.classList.add('head-line');

  const title = document.createElement('h3');
  title.textContent = 'Today`s To Do';

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('refresh');
  const image = document.createElement('img');
  image.src = Refresh;
  imageContainer.appendChild(image);

  container.appendChild(title);
  container.appendChild(imageContainer);

  return container;
};

export default HeadLine;
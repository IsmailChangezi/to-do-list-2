import Enter from '../media/enter.png';

const Form = () => {
  const input = document.createElement('input');
  input.placeholder = 'Add to your list...';

  const button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.classList.add('add-btn');
  const image = document.createElement('img');
  image.src = Enter;
  button.appendChild(image);

  const tasksConatiner = document.querySelector('.list-container');
  const form = document.createElement('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input.value) return;

    const addTask = new CustomEvent('addtask', {
      detail: {
        description: input.value,
      },
    });
    tasksConatiner.dispatchEvent(addTask);
    input.value = '';
  });
  form.appendChild(input);
  form.appendChild(button);
  return form;
};

export default Form;
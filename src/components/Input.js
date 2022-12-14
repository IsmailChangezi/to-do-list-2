import { MoreImage, TrashImage } from './Images';

const Input = (item, actions) => {
  const input = document.createElement('input');
  input.value = item.description;
  if (item.completed) {
    input.classList.add('input-completed');
  }

  input.addEventListener('focusin', () => {
    actions.replaceChildren(TrashImage(item));
    input.classList.remove('input-completed');
  });
  input.addEventListener('focusout', () => {
    setTimeout(() => actions.replaceChildren(MoreImage()), 700);
    if (item.completed) {
      input.classList.add('input-completed');
    }
  });
  input.addEventListener('input', () => {
    const editTask = new CustomEvent('edittask', {
      detail: {
        info: {
          newTask: { ...item, description: input.value },
          index: item.index,
        },
      },
    });
    const tasksConatiner = document.querySelector('.list-container');
    tasksConatiner.dispatchEvent(editTask);
  });

  return input;
};

export default Input;

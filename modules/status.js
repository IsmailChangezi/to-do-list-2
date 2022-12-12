class Status {
  constructor(completed, index) {
    this.completed = completed;
    this.index = index;
  }

  Set = () => {
    const tasks = JSON.parse(localStorage.getItem('to_do_list'));
    tasks.forEach((task) => {
      if (task.index === this.index) {
        task.completed = this.completed;
      }
    });
    localStorage.setItem('to_do_list', JSON.stringify(tasks));
  };
}

const setCheckboxListener = () => {
  document.querySelectorAll('.checked').forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const checkboxId = e.target.id;
      const index = parseInt(e.target.parentNode.parentNode.id, 10);
      const Completed = () => {
        try {
          if (document.querySelector(`#${checkboxId}:checked`).value !== null) {
            document.querySelector(`#task${index}`).classList.add('completed');
            return true;
          }
        } catch (error) {
          document.querySelector(`#task${index}`).classList.remove('completed');
        }
        return false;
      };
      const status = new Status(Completed(), index);
      status.Set();
    });
  });
};

const checkCompleted = () => {
  const tasks = JSON.parse(localStorage.getItem('to_do_list'));
  if (tasks !== null) {
    tasks.forEach((task) => {
      if (task.completed === true) {
        document.querySelector(`#task${task.index}`).classList.add('completed');
        try {
          document.getElementById(`chk${task.index}`).checked = true;
        // eslint-disable-next-line no-empty
        } catch (error) {}
      }
    });
  }
};

export { setCheckboxListener, checkCompleted };
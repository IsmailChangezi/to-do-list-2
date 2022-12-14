const addTask = (tasksArr, description) => {
  const result = [...tasksArr];
  const index = tasksArr.length + 1;
  result.push({
    description,
    index,
    completed: false,
  });
  return result;
};

const removeTask = (tasksArr, taskIndex) => {
  let itemSkiped = false;
  const result = [];

  tasksArr.forEach((task) => {
    if (task.index === taskIndex) {
      itemSkiped = true;
    } else {
      const newTask = { ...task };
      if (itemSkiped) {
        newTask.index = task.index - 1;
      }

      result.push(newTask);
    }
  });
  return result;
};

export { addTask, removeTask };
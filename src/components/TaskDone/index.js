const TaskDone = ({ task }) => {
  return (
    <div className="task__done">
      <h6>{task.text}</h6>
      <p>Status: {task.status}</p>
    </div>
  );
};

export default TaskDone;

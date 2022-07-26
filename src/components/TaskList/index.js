import { updateTask } from "../../service";
import TaskDone from "../TaskDone";
import TaskEdit from "../TaskEdit";

const TaskList = ({ tasks, fetchTask }) => {
  const fetchDone = async (id) => {
    await updateTask(id, {
      status: "DONE",
    });

    await fetchTask();
  };

  const fetchDelete = async (id) => {
    await updateTask(id, {
      status: "DELETE",
    });

    await fetchTask();
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <div>
          {task.status !== "DELETE" && (
            <article key={index} className="grid center margin__3">
              {task.status === "DONE" ? (
                <TaskDone task={task} />
              ) : (
                <>
                  <h6>{task.text}</h6>
                  <button
                    className="btn__list"
                    onClick={() => fetchDone(task.id)}
                  >
                    Done
                  </button>
                  <TaskEdit task={task} fetchTask={fetchTask} />
                  <button
                    className="btn__list"
                    onClick={() => fetchDelete(task.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </article>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;

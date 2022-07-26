import { useState } from "react";
import { updateTask } from "../../service";

const TaskEdit = ({ task, fetchTask }) => {
  const [open, setOpen] = useState(false);

  const [text, setText] = useState(task.text);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const fetchUpdate = async () => {
    await updateTask(task.id, {
      text,
    });
    await fetchTask();
    setOpen(!open);
  };

  return (
    <>
      <button className="btn__list" onClick={() => setOpen(!open)}>
        Editar
      </button>
      <dialog open={open}>
        <article>
          <header>
            <a
              onClick={() => setOpen(!open)}
              aria-label="Close"
              className="close"
            ></a>
            Editar {task.text}
          </header>
          <p>
            <input
              type="text"
              value={text}
              onChange={handleInputChange}
              placeHolder="Editar tarea"
            />
            <button onClick={fetchUpdate}>Guardar</button>
          </p>
        </article>
      </dialog>
    </>
  );
};

export default TaskEdit;

import { useState } from "react";
import { StoreTask, TaskList } from "./components";
import { getTasks, createTask } from "./service";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const [text, setText] = useState("");

  const fetchTask = async () => {
    const { tasks } = await getTasks();
    setTasks(tasks);
  };

  const handleInputCange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  const fetchStore = async () => {
    if (text === "") return;

    await createTask({
      text,
      status: "TODO",
    });

    await fetchTask();

    setText("");
  };

  return (
    <div className="container">
      <h2>Todo App</h2>
      <StoreTask
        fetchTask={fetchTask}
        text={text}
        handleInputCange={handleInputCange}
        fetchStore={fetchStore}
      />
      <TaskList tasks={tasks} fetchTask={fetchTask} />
    </div>
  );
}

export default App;

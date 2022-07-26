const StoreTask = ({ fetchTask, text, handleInputCange, fetchStore }) => {
  return (
    <div className="grid">
      <input
        value={text}
        onChange={handleInputCange}
        type="text"
        placeholder="Ingrese el nombre de la tarea"
      />
      <button>Submit</button>
      <button onClick={fetchStore}>Fetch</button>
      <button onClick={fetchTask}>Get</button>
    </div>
  );
};

export default StoreTask;

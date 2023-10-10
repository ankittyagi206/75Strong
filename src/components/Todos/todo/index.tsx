import "./todo.css";
const Todo = (task) => {
  console.log(task);
  return (
    <section className="todo-item">
      <div className="check">&#10003;</div>
      <div>{task?.task}</div>
      <div className="close">x</div>
    </section>
  );
};
export default Todo;

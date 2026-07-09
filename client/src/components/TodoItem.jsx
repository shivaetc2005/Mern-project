function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <span>{todo.title}</span>

      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
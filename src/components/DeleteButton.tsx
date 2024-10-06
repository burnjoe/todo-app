// Destructuring setTodos from props (props.setTodos)
export default function DeleteButton({ id, setTodos }) {
  return (
    <button
      onClick={() => {
        // The 'prev' refers to previous state of todos array (current list of todos)
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      }}
    >
      ❌
    </button>
  );
}

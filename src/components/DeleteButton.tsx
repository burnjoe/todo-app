// Destructuring setTodos from props (props.setTodos)
export default function DeleteButton({ id, handleDeleteTodo }) {
  return (
    <button
      onClick={(e) => {
        // Prevents the click event from bubbling up to parent elements
        e.stopPropagation();
        handleDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}

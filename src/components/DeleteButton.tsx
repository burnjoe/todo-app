type DeleteButtonProps = {
  id: number;
  onDeleteTodo: (id: number) => void;
};

// Destructuring setTodos from props (props.setTodos)
export default function DeleteButton({ id, onDeleteTodo }: DeleteButtonProps) {
  return (
    <button
      onClick={(e) => {
        // Prevents the click event from bubbling up to parent elements
        e.stopPropagation();
        onDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}

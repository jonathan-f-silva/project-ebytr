export default function TodoList() {
  const list = [];

  if (!list.length) return <div>Sem tarefas. Adicione uma!</div>;

  return (
    <ul data-testid="todo-list">
      {/* Todos goes here */}
    </ul>
  );
}

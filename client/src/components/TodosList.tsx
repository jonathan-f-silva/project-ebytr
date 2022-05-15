import { useContext } from 'react';
import { TodosContextType } from '../@types/custom';
import { TodosContext } from '../context/TodosContext';

export default function TodoList() {
  const { todos } = useContext(TodosContext) as TodosContextType;

  if (!todos.length) return <div>Sem tarefas. Adicione uma!</div>;

  return (
    <ul data-testid="todos-list">
      { todos.map(({ id, description, status, createdAt }) => (
        <li key={ id }>
          <span>{description}</span>
          <span>{status}</span>
          <span>{createdAt.toLocaleDateString()}</span>
        </li>
      ))}
    </ul>
  );
}

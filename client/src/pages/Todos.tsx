import AddTodoButton from '../components/AddTodoButton';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

export default function Todos() {
  return (
    <div>
      <div>
        <TodoInput />
        <AddTodoButton />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}
